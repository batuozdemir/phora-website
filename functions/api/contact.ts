export interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const role = formData.get('i_am_a') as string;
    const inquiryType = formData.get('inquiry_type') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const emailContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Role:</strong> ${role || 'Not specified'}</p>
      <p><strong>Inquiry Type:</strong> ${inquiryType || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Phora Website <noreply@updates.phoratmc.com>',
        to: ['info@phoratmc.com'],
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: emailContent,
      })
    });

    if (resendResponse.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const errorData = await resendResponse.text();
      console.error('Resend API Error:', errorData);
      return new Response(JSON.stringify({ error: "Failed to send email." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (err) {
    console.error('Function Error:', err);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
