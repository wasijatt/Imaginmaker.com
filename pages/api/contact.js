// pages/api/contact.js
import { sendMail } from '../../lib/mail';

export default async function handler(req, res) {
  // Set response headers
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, message } = req.body;
    
    // Basic validation
    if (!fullName || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Full name, email, and phone are required' 
      });
    }

    // Send email to admin
    const adminEmail = await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        <p>Received at: ${new Date().toLocaleString()}</p>
      `
    });

    // Send confirmation to user
    const userEmail = await sendMail({
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for reaching out. We've received your message and will get back to you soon.</p>
        <p>Here's what you submitted:</p>
        <ul>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Message:</strong> ${message || 'No message provided'}</li>
        </ul>
        <p>Best regards,<br>Your Company Team</p>
      `
    });

    if (!adminEmail.success || !userEmail.success) {
      console.error('Email sending issues:', { adminEmail, userEmail });
      return res.status(500).json({
        success: false,
        message: 'Form received but email notifications failed'
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}