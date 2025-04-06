import nodemailer from 'nodemailer';

export async function sendMail({ to, subject, html }) {
  // Validate configuration
  const requiredEnvVars = ['SMTP_USER', 'SMTP_PASSWORD'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    const error = `Missing SMTP configuration: ${missingVars.join(', ')}`;
    console.error(error);
    return { success: false, error };
  }

  // Production-specific settings
  const isProduction = process.env.NODE_ENV === 'production';
  const transporterConfig = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    // Stricter TLS settings for production
    tls: {
      rejectUnauthorized: isProduction,
      minVersion: isProduction ? 'TLSv1.2' : undefined
    }
  };

  try {
    const transporter = nodemailer.createTransport(transporterConfig);
    
    // Verify connection
    await transporter.verify();
    console.log('SMTP connection verified');

    const info = await transporter.sendMail({
      from: `"Imaginmaker" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      // Important for production deliverability
      headers: {
        'X-Mailer': 'Imaginmaker Contact Form',
        'X-Priority': '1'
      }
    });

    console.log(`Email sent to ${to}`, info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error('Email failed:', {
      to,
      error: error.message,
      code: error.code,
      stack: isProduction ? undefined : error.stack
    });
    
    return { 
      success: false, 
      error: error.message,
      code: error.code
    };
  }
}