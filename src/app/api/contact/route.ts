import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Get form data from the request
    const formData = await request.formData();

    // Create new FormData for Web3Forms
    const web3FormData = new FormData();

    // Copy all form fields
    for (const [key, value] of formData.entries()) {
      web3FormData.append(key, value);
    }

    // Add Web3Forms access key from environment variable
    web3FormData.set('access_key', process.env.WEB3_ACCESS_KEY || '');

    // Add additional Web3Forms configuration
    web3FormData.set('subject', 'New Contact Form Submission from Portfolio');
    web3FormData.set('from_name', 'Portfolio Contact Form');

    // Submit to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: web3FormData
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return NextResponse.json(
        { message: 'Form submitted successfully', data: result },
        { status: 200 }
      );
    } else {
      console.error('Web3Forms error:', result);
      return NextResponse.json(
        { error: 'Failed to submit form', details: result },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
