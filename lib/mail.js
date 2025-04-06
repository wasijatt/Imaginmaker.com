import nodemailer from 'nodemailer';

export async function sendMail({ to, subject, html }) {
  // Validate configuration
  const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_FROM'];
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      const error = `Missing required email config: ${varName}`;
      console.error(error);
      return { success: false, error };
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify connection
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_FROM}>`,
      to,
      subject,
      html,
    });

    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error('Email error:', error);
    return { 
      success: false, 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    };
  }
}