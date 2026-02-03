import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // Configure Nodemailer transporter
  // Replace with your SMTP details
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // Use 'true' for 465, 'false' for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // Email to me (the site owner)
    const mailOptionsToOwner = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p>You have received a new message from your website contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
    await transporter.sendMail(mailOptionsToOwner);

    // Acknowledgment email to the sender
    const mailOptionsToSender = {
      from: process.env.SMTP_USER,
      to: email, // Send back to the person who filled the form
      subject: `Thank you for your message, ${name}!`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting Corelyn! We have received your message and will get back to you within 24 hours.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Best regards,<br/>The Corelyn Team</p>
      `,
    };
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.', error: error.message }, { status: 500 });
  }
}
