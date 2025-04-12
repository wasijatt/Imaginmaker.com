import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use 'service' instead of host/port
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // Helps with some localhost issues
  }
});

export async function sendContactEmail(formData) {
  try {
    // Email to you (admin)
    await transporter.sendMail({
      from: `"ImaginMaker Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        ${formData.interestedIn ? `<p><strong>Interested In:</strong> ${formData.interestedIn}</p>` : ''}
        ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
        <p><small>Received at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"ImaginMaker Team" <${process.env.EMAIL_FROM}>`,
      to: formData.email,
      subject: 'Thank you for contacting ImaginMaker!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7D40FF;">Thank you for reaching out!</h2>
          <p>We've received your message and will get back to you within 24-48 hours.</p>
          
          <h3 style="color: #7D40FF;">Your Submission Details:</h3>
          <p><strong>Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          ${formData.interestedIn ? `<p><strong>Interested In:</strong> ${formData.interestedIn}</p>` : ''}
          ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
          
          <p style="margin-top: 30px;">
            Best regards,<br/>
            <strong style="color: #7D40FF;">The ImaginMaker Team</strong>
          </p>
          
          <p style="font-size: 12px; color: #777; margin-top: 30px;">
            This is an automated message. Please do not reply directly to this email.
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}