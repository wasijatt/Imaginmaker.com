// pages/api/contact.js
import dbConnect from 'lib/mongodb';
import Contact from 'models/Contact';
import { sendMail } from 'lib/mail';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  console.log('Contact form submission received');
  
  try {
    console.log('Connecting to database...');
    await dbConnect();
    
    const body = req.body;
    console.log('Processing form data:', body);

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone) {
      console.error('Missing required fields in request');
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    console.log('Attempting to create contact in database');
    const contactData = {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      message: body.message || '',
      interestedIn: body.interestedIn || ''
    };
    
    console.log('Contact data to save:', contactData);
    
    const contact = new Contact(contactData);
    const savedContact = await contact.save();
    
    if (!savedContact || !savedContact._id) {
      throw new Error('Failed to save contact data');
    }
    
    console.log('Contact saved successfully with ID:', savedContact._id);
    console.log('Collection used:', contact.collection.name);
    console.log('Database used:', mongoose.connection.db.databaseName);

    // Send confirmation email to user
    console.log('Sending confirmation email to user');
    const userEmailResult = await sendMail({
      to: body.email,
      subject: 'Thank you for contacting Imaginmaker',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${body.fullName},</p>
        <p>We have received your message and will get back to you soon.</p>
        <p>Best regards,</p>
        <p>The Imaginmaker Team</p>
      `
    });

    if (!userEmailResult.success) {
      console.error('Failed to send user email:', userEmailResult.error);
    }

    // Send notification email to admin
    console.log('Sending admin notification email');
    const adminEmailResult = await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        ${body.interestedIn ? `<p><strong>Interested In:</strong> ${body.interestedIn}</p>` : ''}
        ${body.message ? `<p><strong>Message:</strong> ${body.message}</p>` : ''}
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || ''}/admin/contacts" target="_blank">View in admin dashboard</a></p>
      `
    });

    if (!adminEmailResult.success) {
      console.error('Failed to send admin email:', adminEmailResult.error);
    }

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      data: savedContact
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error'
    });
  }
}