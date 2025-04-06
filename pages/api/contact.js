import { sendMail } from '../../lib/mail';
import Contact from '../../models/Contact';
import dbConnect from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { fullName, email, phone, interestedIn } = req.body;

    // Save the contact form data to the database (optional)
    // const newContact = new Contact({ fullName, email, phone, interestedIn });
    // await newContact.save();

    // Send email to the user
    const userEmailResponse = await sendMail({
      to: email,
      subject: 'Thank you for contacting us!',
      html: `<p>Hi ${fullName},</p><p>Thank you for reaching out. We will get back to you soon.</p>`,
    });

    // Send email to the admin
    const adminEmailResponse = await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: `<p>You have a new contact form submission from ${fullName} (${email}).</p>`,
    });

    if (userEmailResponse.success && adminEmailResponse.success) {
      return res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to send emails' });
    }
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}