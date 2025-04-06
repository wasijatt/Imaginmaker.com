// lib/mail.js
import nodemailer from 'nodemailer';

export async function sendMail({ to, subject, html }) {
  // Validate configuration
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('SMTP credentials not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // For local testing only, remove in production
      }
    });

    // Verify connection
    await transporter.verify();
    console.log('Server is ready to take our messages');

    const info = await transporter.sendMail({
      from: `"Imaginmaker Contact" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error('Email sending failed:', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    return { 
      success: false, 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    };
  }
}