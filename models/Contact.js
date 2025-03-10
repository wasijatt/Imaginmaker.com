import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  message: {
    type: String,
    default: '',
    trim: true
  },
  interestedIn: {
    type: String,
    default: '',
    trim: true
  }
}, {
  timestamps: true,
  collection: 'contacts' // Explicitly set collection name
});

// This approach prevents "OverwriteModelError" when the
// application hot-reloads during development
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;