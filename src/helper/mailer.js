import { resend } from 'resend'; // Ensure you import the resend instance
import createApiResponse from "@/emailTypes/apiResponse";

export async function sendVerificationEmail(firstName, email) {
    const emailContent = `<div><h1>Welcome, ${firstName}!</h1></div>`;

    try {
        // Log email details before sending
        console.log(`Sending email to: ${email}`);
        console.log(`Email subject: Welcome to Our Service!`);
        console.log(`Email content: ${emailContent}`);

        await resend.emails.send({
            from: process.env.EMAIL_FROM, // Use your verified domain email
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
