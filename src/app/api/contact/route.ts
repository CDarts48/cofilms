import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate inputs
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Check if API key exists
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json(
                { error: 'Email service is not configured' },
                { status: 500 }
            );
        }

        // Dynamically import Resend to avoid build-time errors
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send email using Resend
        const result = await resend.emails.send({
            from: 'Colorado Films <onboarding@resend.dev>',
            to: 'info@coloradofilms.com',
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        console.log('Email sent:', result);

        return NextResponse.json(
            { success: true, message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}` },
            { status: 500 }
        );
    }
}