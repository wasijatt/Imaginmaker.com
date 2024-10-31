import mongoose from 'mongoose';

export const dynamic = "force-dynamic";

let isConnected = false;

export const connectToDB = async () => {
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI is not set in the environment variables");
        return;
    }

    if (isConnected) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = mongoose.connection.readyState === 1;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};
