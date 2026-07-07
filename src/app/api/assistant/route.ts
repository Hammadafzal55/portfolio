import { NextResponse } from "next/server";

const profileContext = `
You are Hammad Afzal's portfolio assistant. Answer like a concise client-facing assistant.
Facts:
- Hammad Afzal is a GIAIC student focused on Artificial Intelligence, Web 3.0, and Metaverse.
- He builds frontend-heavy products with Next.js, React, TypeScript, JavaScript, Tailwind CSS, and strong UI polish.
- He has project exposure with Sanity, FastAPI, Python, OpenAI Agents SDK, vector embeddings, Node.js, Express.js, PostgreSQL, MongoDB, Docker, and Kubernetes learning.
- Projects include Foodtuck Fast Food, Exclusive hackathon template, FlowTodo, Physical AI & Humanoid Robotics, Crypto Dashboard, Techverse Sanity Blog, Resume, Real Estate Website, and Countdown Timer.
- Contact: hammadafzaln@gmail.com, phone 0323 8020704.
Rules:
- Do not invent private details.
- If asked to hire/contact, point to email/phone/contact form.
- Keep answers under 90 words unless asked for detail.
`;

function localAnswer(question: string) {
  const normalized = question.toLowerCase();
  if (
    normalized.includes("who are you") ||
    normalized.includes("who r u") ||
    normalized.includes("your name") ||
    normalized.includes("what are you")
  ) {
      return "I am Hammad AI, the assistant built into Hammad Afzal's portfolio. I can answer client questions about his skills, projects, AI work, backend direction, availability, and contact details.";
  }
  if (
    normalized.includes("how are you") ||
    normalized.includes("how r u") ||
    normalized === "hi" ||
    normalized === "hello" ||
    normalized === "hey"
  ) {
    return "I am doing great and ready to help. I am Hammad AI, so you can ask me about Hammad Afzal's projects, skills, AI work, backend experience, or contact details.";
  }
  if (normalized.includes("contact") || normalized.includes("hire")) {
    return "You can contact Hammad at hammadafzaln@gmail.com or 0323 8020704. The portfolio contact form can also send a message through the backend route.";
  }
  if (normalized.includes("ai") || normalized.includes("agent")) {
    return "Hammad's AI direction includes FlowTodo with Next.js, FastAPI, Python, and OpenAI Agents SDK, plus Physical AI and Humanoid Robotics work using Docusaurus, FastAPI, vector embeddings, and robotics-focused content.";
  }
  if (normalized.includes("skill") || normalized.includes("stack")) {
    return "Hammad works with Next.js, React, TypeScript, JavaScript, Tailwind CSS, Sanity, Node.js, Express, Python, FastAPI, OpenAI tooling, PostgreSQL, MongoDB, Docker, and Kubernetes learning.";
  }
  return "Hammad builds polished frontend and AI-powered web experiences: portfolios, ecommerce UIs, dashboards, CMS blogs, docs platforms, and productivity apps using Next.js, React, Tailwind, Sanity, FastAPI, Python, and AI tooling.";
}

export async function POST(request: Request) {
  const { question } = await request.json();

  if (!question || typeof question !== "string") {
    return NextResponse.json({ error: "Question is required." }, { status: 400 });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      answer: localAnswer(question),
      provider: "local",
    });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Hammad Afzal Portfolio",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini",
        messages: [
          { role: "system", content: profileContext },
          { role: "user", content: question },
        ],
        temperature: 0.35,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({
        answer: localAnswer(question),
        provider: "local",
      });
    }

    const data = await response.json();
    const answer =
      data?.choices?.[0]?.message?.content?.trim() || localAnswer(question);

    return NextResponse.json({ answer, provider: "openrouter" });
  } catch {
    return NextResponse.json({
      answer: localAnswer(question),
      provider: "local",
    });
  }
}
