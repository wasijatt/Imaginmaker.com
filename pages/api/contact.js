// pages/api/contact.js
import { sendMail } from '../../lib/mail';
import Contact from '../../models/Contact';
import dbConnect from '../../lib/mongodb';

export default async function handler(req, res) {
  // Set response headers first
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    // Validate required fields
    const { fullName, email, phone, message, interestedIn } = req.body;
    
    if (!fullName || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Save to database
    const newContact = new Contact({ 
      fullName, 
      email, 
      phone, 
      message: message || '', 
      interestedIn: interestedIn || '' 
    });
    await newContact.save();

    // Send emails
    const userEmailPromise = sendMail({
      to: email,
      subject: 'Thank you for contacting us!',
      html: `<p>Hi ${fullName},</p><p>Thank you for reaching out. We'll get back to you soon.</p>`,
    });

    const adminEmailPromise = sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: `<p>You have a new contact form submission from ${fullName} (${email}).</p>`,
    });

    const [userEmailResponse, adminEmailResponse] = await Promise.all([
      userEmailPromise,
      adminEmailPromise
    ]);

    if (!userEmailResponse.success || !adminEmailResponse.success) {
      console.error('Email sending issues:', { userEmailResponse, adminEmailResponse });
      // Still return success since the form was submitted, just log email issues
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Internal server error' 
    });
  }
}