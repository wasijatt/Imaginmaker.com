// pages/api/admin/contacts.js
import dbConnect from 'lib/mongodb';
import Contact from 'models/Contact';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Connect to the database
    await dbConnect();
    
    // Find all contacts, sorted by newest first
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