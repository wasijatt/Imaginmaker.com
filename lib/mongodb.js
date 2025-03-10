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
      console.log('Attempting database connection to MongoDB Atlas');
      
      cached.promise = mongoose.connect(MONGODB_URI, opts);
    } catch (error) {
      console.error('MongoDB connection error:', error);
      cached.promise = null;
      throw error;
    }
  }
  
  try {
    cached.conn = await cached.promise;
    
    // Additional logs to help debug
    console.log('Database connected successfully!');
    console.log('Database name:', mongoose.connection.db.databaseName);
    console.log('Available collections:', 
      await mongoose.connection.db.listCollections().toArray().then(collections => 
        collections.map(c => c.name)
      )
    );
    
    return cached.conn;
  } catch (error) {
    console.error('Database connection failed:', error);
    cached.promise = null;
    throw error;
  }
}

export default dbConnect;