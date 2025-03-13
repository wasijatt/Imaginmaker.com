// pages/api/contact.js
import dbConnect from '../../lib/mongodb';
import Contact from '../../models/Contact';
import { sendMail } from '../../lib/mail';

export default async function handler(req, res) {
  // Set CORS headers for API routes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  console.log('Contact form submission received');
  
  try {
    // Make sure all required environment variables are set
    if (!process.env.MONGODB_URI) {
      console.error('Missing required MONGODB_URI environment variable');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: Missing database connection string'
      });
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Missing required SMTP environment variables');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: Missing email configuration'
      });
    }

    if (!process.env.ADMIN_EMAIL) {
      console.error('Missing ADMIN_EMAIL environment variable');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: Missing admin email'
      });
    }

    console.log('Connecting to database...');
    try {
      await dbConnect();
      console.log('Connected to database successfully');
    } catch (dbConnectError) {
      console.error('Database connection error:', dbConnectError);
      return res.status(500).json({
        success: false,
        message: 'Database connection failed: ' + dbConnectError.message
      });
    }
    
    // Parse body with error handling
    let body;
    try {
      body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      console.log('Processing form data:', body);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return res.status(400).json({
        success: false,
        message: 'Invalid request format'
      });
    }

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone) {
      console.error('Missing required fields in request');
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Create contact data object based on the schema
    const contactData = {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      message: body.message || '',
      interestedIn: body.interestedIn || ''
    };
    
    console.log('Contact data to save:', contactData);
    
    // Create and save the contact document
    try {
      const contact = new Contact(contactData);
      const savedContact = await contact.save();
      
      if (!savedContact || !savedContact._id) {
        throw new Error('Failed to save contact data');
      }
      
      console.log('Contact saved successfully with ID:', savedContact._id);
    } catch (saveError) {
      console.error('Error saving contact:', saveError);
      return res.status(500).json({
        success: false,
        message: 'Error saving contact: ' + saveError.message
      });
    }

    // Send confirmation email to user
    let userEmailSent = false;
    try {
      console.log('Sending confirmation email to user');
      const userEmailResult = await sendMail({
        to: body.email,
        subject: 'Thank you for contacting Imaginmaker',
        html: `
          <h2>Thank you for contacting us!</h2>
          <p>Dear ${body.fullName},</p>
          <p>We have received your message and will get back to you soon.</p>
          <p>Best regards,</p>
          <p>The Imaginmaker Team</p>
        `
      });

      userEmailSent = userEmailResult.success;
      if (!userEmailResult.success) {
        console.error('Failed to send user email:', userEmailResult.error);
      }
    } catch (emailError) {
      console.error('Error sending user confirmation email:', emailError);
      // Continue with the response - we don't want email failures to affect the form submission
    }

    // Send notification email to admin
    let adminEmailSent = false;
    try {
      console.log('Sending admin notification email');
      const adminEmailResult = await sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: 'New Contact Form Submission',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${body.fullName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          ${body.interestedIn ? `<p><strong>Interested In:</strong> ${body.interestedIn}</p>` : ''}
          ${body.message ? `<p><strong>Message:</strong> ${body.message}</p>` : ''}
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || ''}/admin/contacts" target="_blank">View in admin dashboard</a></p>
        `
      });

      adminEmailSent = adminEmailResult.success;
      if (!adminEmailResult.success) {
        console.error('Failed to send admin email:', adminEmailResult.error);
      }
    } catch (emailError) {
      console.error('Error sending admin notification email:', emailError);
      // Continue with the response - we don't want email failures to affect the form submission
    }

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      data: {
        userEmailSent,
        adminEmailSent
      }
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error'
    });
  }
}