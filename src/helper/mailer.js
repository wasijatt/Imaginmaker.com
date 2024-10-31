import nodemailer from 'nodemailer';
import createApiResponse from "@/emailTypes/apiResponse";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function sendVerificationEmail(firstName, email) {
    try {
        const emailContent = `<div><h1>Welcome, ${firstName}!</h1></div>`;

        await transporter.sendMail({
            from: '"Your App Name" <no-reply@yourapp.com>',
            to: email,
            subject: 'Welcome to Our Service!',
            html: emailContent,
        });

        console.log('Email sent successfully');
        return createApiResponse(true, "Email sent successfully");
    } catch (error) {
        console.error("Error sending verification email:", error);
        return createApiResponse(false, "Failed to send verification email");
    }
}
