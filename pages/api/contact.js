import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';
import { sendContactEmail } from '@/lib/mailer';
import rateLimit from 'express-rate-limit';

// Initialize rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  handler: (req, res) => {
    console.warn('Rate limit exceeded for contact form from IP:', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.'
    });
  }
});

// Helper function to run middleware
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  try {
    // Apply rate limiting
    await runMiddleware(req, res, limiter);

    if (req.method !== 'POST') {
      console.log('Invalid method used for contact API');
      return res.status(405).json({ 
        success: false, 
        message: 'Method not allowed' 
      });
    }

    // Validate content type
    if (req.headers['content-type'] !== 'application/json') {
      console.log('Invalid content type for contact form');
      return res.status(400).json({ 
        success: false, 
        message: 'Content-Type must be application/json' 
      });
    }

    const formData = req.body;

    // Enhanced validation
    if (!formData.email || !formData.email.includes('@')) {
      console.log('Invalid email submitted:', formData.email);
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide your full name' 
      });
    }

    // Connect to database
    await dbConnect();

    // Log the submission (without sensitive data)
    console.log('New contact form submission from:', formData.email);

    // Save to database
    const newContact = new Contact({
      fullName: formData.fullName.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone ? formData.phone.trim() : undefined,
      interestedIn: formData.interestedIn ? formData.interestedIn.trim() : undefined,
      message: formData.message ? formData.message.trim() : undefined,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    });

    await newContact.save();

    // Send emails
    await sendContactEmail(formData);

    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully!' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Log additional error context
    console.error('Error context:', {
      formData: {
        email: req.body?.email,
        name: req.body?.fullName
      },
      headers: {
        ip: req.headers['x-forwarded-for'],
        userAgent: req.headers['user-agent']
      }
    });

    return res.status(500).json({ 
      success: false, 
      message: 'An unexpected error occurred. Please try again later.' 
    });
  }
}