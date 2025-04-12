import { sendMail } from '../../lib/mailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { email, fullName } = req.body;

    // Send email to the user
    const userEmailResponse = await sendMail({
      to: email,
      subject: 'Welcome to Our Platform!',
      html: `<p>Hi ${fullName},</p><p>Thank you for signing up. We are excited to have you on board!</p>`,
    });

    // Send email to the admin
    const adminEmailResponse = await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New User Signup',
      html: `<p>A new user has signed up: ${fullName} (${email}).</p>`,
    });

    if (userEmailResponse.success && adminEmailResponse.success) {
      return res.status(200).json({ success: true, message: 'Signup successful' });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to send emails' });
    }
  } catch (error) {
    console.error('Error in signup:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}