// pages/api/admin/contacts.js
import dbConnect from 'lib/mongodb';
import Contact from 'models/Contact';
import { adminAuthMiddleware } from 'middleware/adminAuth';

export default async function handler(req, res) {
  // Check method
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Verify admin authentication
  const authError = await adminAuthMiddleware(req, res);
  if (authError) return authError;

  try {
    await dbConnect();
    
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .lean();
    
    return res.status(200).json({ 
      success: true, 
      contacts 
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Internal server error' 
    });
  }
}
