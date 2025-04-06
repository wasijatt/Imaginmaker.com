// pages/api/contact.js
import { sendMail } from '../../lib/mail';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, message } = req.body;
    
    if (!fullName || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Full name, email, and phone are required' 
      });
    }

    // Attempt to send admin email
    const adminEmail = await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Submission',
      html: `<p>New contact from ${fullName} (${email}, ${phone}):<br>${message || 'No message'}</p>`
    });

    // Attempt to send user confirmation (don't await so both send simultaneously)
    const userEmail = await sendMail({
      to: email,
      subject: 'Thanks for contacting Imaginmaker!',
      html: `<p>Hi ${fullName},</p>
             <p>We've received your message and will respond soon.</p>
             <p><strong>Your message:</strong> ${message || 'None provided'}</p>`
    });

    // Check if both emails succeeded
    const allEmailsSent = adminEmail.success && userEmail.success;

    return res.status(allEmailsSent ? 200 : 206).json({ 
      success: true,
      message: allEmailsSent 
        ? 'Form submitted successfully' 
        : 'Form received but email notifications partially failed',
      emailStatus: {
        admin: adminEmail.success,
        user: userEmail.success
      }
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
}