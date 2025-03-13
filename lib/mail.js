import nodemailer from 'nodemailer';

export async function sendMail({ to, subject, html }) {
  // Validate required environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || 
      !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || 
      !process.env.SMTP_FROM) {
    console.error('Missing required SMTP environment variables');
    return { 
      success: false, 
      error: 'Missing required SMTP configuration' 
    };
  }

  const isEthereal = process.env.SMTP_HOST.includes('ethereal.email');
  
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      debug: isEthereal,
    });

    // Verify transporter connection configuration
    await transporter.verify().catch(err => {
      console.error('SMTP connection verification failed:', err);
      throw new Error(`SMTP connection failed: ${err.message}`);
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    });
    
    console.log('Email sent successfully:', info.messageId);
    
    if (isEthereal) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: error.message };
  }
}