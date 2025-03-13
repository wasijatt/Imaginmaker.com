import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log('Using existing database connection');
    return cached.conn;
  }
  
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    
    try {
      console.log('Attempting database connection to:', MONGODB_URI);
      
      cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
        console.log('Database connected successfully!');
        return mongoose;
      });
    } catch (error) {
      console.error('MongoDB connection error:', error);
      cached.promise = null;
      throw error;
    }
  }
  
  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error('Database connection failed:', error);
    cached.promise = null;
    throw error;
  }
}

export default dbConnect;