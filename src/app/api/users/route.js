import { connectToDB } from '@/config/db';
import User from "@/models/usersModel";
import { NextResponse } from 'next/server';
import { sendVerificationEmail } from '@/helper/mailer';

connectToDB();

export const dynamic = "force-dynamic";

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { FirstName, email, phone, interestedIn } = reqBody;

        // Check required fields
        if (!FirstName || !email || !phone || !interestedIn) {
            return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
        }

        // Check for existing user
        const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return NextResponse.json({ success: false, message: "User with this email or phone already exists" }, { status: 409 });
        }

        // Create new user
        const newUser = new User({ FirstName, email, phone, interestedIn });
        const savedUser = await newUser.save();

        console.log("User saved:", savedUser);

        // Send verification email
        await sendVerificationEmail(FirstName, email);

        return NextResponse.json({ success: true, message: 'User created successfully' });
    } catch (error) {
        console.error("Error in POST /api/users:", error);
        return NextResponse.json({ success: false, message: 'An error occurred during registration' }, { status: 500 });
    }
}
