import { connectToDB } from '@/config/db';
import User from "@/models/usersModel";
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

connectToDB();
export const dynamic = "force-dynamic";

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { FirstName, email, phone, interestedIn } = reqBody; 

        // Basic Input Validation
        if (!FirstName || !email || !phone || !interestedIn) { 
            return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ success: false, message: "User already exists" }, { status: 409 });
        }

        // Create and save new user
        const newUser = new User({
            FirstName,
            email,
            phone,
            interestedIn 
        });

        const savedUser = await newUser.save();
        console.log("User saved:", savedUser);

        return NextResponse.json({ success: true, message: 'User created successfully' });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, message: 'An error occurred' }, { status: 500 });
    }
}
