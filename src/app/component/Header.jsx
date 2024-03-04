// pages/api/compress.js

import sharp from 'sharp';
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';

const upload = multer({ dest: 'uploads/' });

export const config = {
  api: {
    bodyParser: false, // Disabling body parsing to handle multipart/form-data manually
  },
};

export default upload.single('image')(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Check if an image file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    // Compress the uploaded image
    const compressedImageBuffer = await sharp(req.file.path)
      .resize({ width: 800 }) // Adjust the width as needed
      .toBuffer();

    // Respond with the compressed image data
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(compressedImageBuffer);
  } catch (error) {
    console.error('Error compressing image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
