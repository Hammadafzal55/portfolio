import { NextResponse } from "next/server";

const toEmail = "hammadafzaln@gmail.com";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const payloadText = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  const response = apiKey
    ? await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: email,
          subject: `Portfolio inquiry from ${name}`,
          text: payloadText,
        }),
      })
    : await fetch(`https://formsubmit.co/ajax/${toEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio inquiry from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

  if (!response.ok) {
    return NextResponse.json(
      {
        error:
          "Message service is not ready yet. Please copy the email and send directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
