import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, "Please write your Firstname"],
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    phone: {
        type: String,
        required: [true, "Please provide PhoneNumber"],
        unique: true,
        match: [/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number"] // Accepts international formats
    },
    interestedIn: { 
        type: String,
        required: [true, "Please specify what you're interested in"],
        trim: true,
        minlength: 2,
        maxlength: 100
    }
});


const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
