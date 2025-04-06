import { sendMail } from '../../lib/mail';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, message } = req.body;
    
    // Validate required fields
    if (!fullName?.trim() || !email?.trim() || !phone?.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Full name, email, and phone are required' 
      });
    }

    // Prepare email content
    const emailContent = {
      admin: {
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact: ${fullName}`,
        html: `<h3>New Contact Submission</h3>
               <p><strong>Name:</strong> ${fullName}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
               <p>Received at: ${new Date().toLocaleString()}</p>`
      },
      user: {
        to: email,
        subject: 'Thank you for contacting Imaginmaker!',
        html: `<p>Hi ${fullName},</p>
               <p>We've received your message and will respond soon.</p>
               ${message ? `<p><strong>Your message:</strong> ${message}</p>` : ''}
               <p>Best regards,<br>Imaginmaker Team</p>`
      }
    };

    // Send emails in parallel
    const [adminResult, userResult] = await Promise.allSettled([
      sendMail(emailContent.admin),
      sendMail(emailContent.user)
    ]);

    // Check results
    const adminSuccess = adminResult.status === 'fulfilled' && adminResult.value.success;
    const userSuccess = userResult.status === 'fulfilled' && userResult.value.success;

    // Log detailed results
    console.log('Email results:', {
      admin: adminSuccess,
      user: userSuccess,
      errors: {
        admin: adminResult.status === 'rejected' ? adminResult.reason : null,
        user: userResult.status === 'rejected' ? userResult.reason : null
      }
    });

    return res.status(200).json({
      success: true,
      emails: {
        admin: adminSuccess,
        user: userSuccess
      },
      message: userSuccess 
        ? 'Form submitted successfully' 
        : 'Form received but email confirmation failed'
    });
    
  } catch (error) {
    console.error('Contact form error:', {
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      body: req.body
    });
    
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
}