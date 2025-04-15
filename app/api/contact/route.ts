import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'gwtVlxJ6xemuxk19i';
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || '';
const EMAILJS_SERVICE_ID = 'service_8i10mcu';
const EMAILJS_TEMPLATE_ID = 'template_gq0x5rm';

export async function POST(request: Request) {
  try {
    // Check if private key is available
    if (!EMAILJS_PRIVATE_KEY) {
      console.error('EmailJS private key is missing');
      return NextResponse.json(
        { success: false, error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send the email using the Node.js version of EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      {
        publicKey: EMAILJS_PUBLIC_KEY,
        privateKey: EMAILJS_PRIVATE_KEY,
      }
    );

    console.log('EmailJS result:', result);

    if (result.status === 200) {
      return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } else {
      console.error('EmailJS send failed:', result);
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}