import mongoose from 'mongoose';

export const dynamic = "force-dynamic"; // This forces dynamic behavior, preventing Next.js from treating this as static

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = db.connections[0].readyState;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};
