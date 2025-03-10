import nodemailer from 'nodemailer';

export async function sendMail({ to, subject, html }) {
  // Check if we're using Ethereal (testing) or a real email service
  const isEthereal = process.env.SMTP_HOST.includes('ethereal.email');
  
  // Create transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // Use TLS when set to true
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    debug: isEthereal, // Only enable debug for Ethereal
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    });
    
    console.log('Email sent successfully:', info.messageId);
    
    // For Ethereal emails, display the preview URL
    if (isEthereal) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: error.message };
  }
}