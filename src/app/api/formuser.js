

import dbConnect from '../../utils/dbConnect';
import FormData from "../component/Login"; // Assuming you have a model for form data

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect(); // Connect to your database

      const { firstName, email, phoneNumber, address, interestedIn } = req.body;

      const formData = new FormData({
        firstName,
        email,
        phoneNumber,
        address,
        interestedIn
      });

      await formData.save();

      res.status(201).json({ success: true, message: 'Form data saved successfully!' });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Error saving form data: ' + error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
