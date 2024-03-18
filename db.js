// import mongoose from "mongoose";
// const connect = async ()=> {
//     try {
//         await mongoose.connect(process.env.MONGO_URL, {
//         useNewUrlParser : true,
//         usenifiedTopologi : true
//         })
//         console.log("Db Connected")
//     } catch (error) {
//         throw new Error ("founding db error ")
//     }
// }
// export default connect
// utils/dbConnect.js

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
