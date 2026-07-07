"use client";

import React, { useState } from "react";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";

const prompts = [
  "What can Hammad build?",
  "Tell me about his AI work",
  "Which backend skills?",
  "How do I contact him?",
];

const knowledge = [
  {
    keys: ["build", "business", "website", "client", "project"],
    answer:
      "Hammad can build polished portfolios, ecommerce interfaces, landing pages, dashboards, CMS blogs, documentation platforms, and AI-assisted productivity apps with Next.js, React, TypeScript, Tailwind, Sanity, FastAPI, Python, and OpenAI tooling.",
  },
  {
    keys: ["ai", "agent", "agents", "openai", "flowtodo", "robotics"],
    answer:
      "His AI work includes FlowTodo with Next.js, FastAPI, Python, and OpenAI Agents SDK, plus a Physical AI and Humanoid Robotics platform using Docusaurus, FastAPI, vector embeddings, and robotics content.",
  },
  {
    keys: ["backend", "database", "node", "express", "postgres", "mongodb", "fastapi"],
    answer:
      "His backend direction includes Node.js, Express.js, FastAPI, Python, PostgreSQL, MongoDB, Sanity, API integration, and product logic that connects frontend interfaces to real workflows.",
  },
  {
    keys: ["contact", "email", "phone", "hire", "available"],
    answer:
      "You can contact Hammad at hammadafzaln@gmail.com or 0323 8020704. The form on this portfolio sends through a backend route and does not open Gmail.",
  },
  {
    keys: ["skills", "stack", "tools"],
    answer:
      "His stack includes Next.js, React, JavaScript, TypeScript, Tailwind, Node.js, Express, Sanity, Python, FastAPI, OpenAI Agents SDK, PostgreSQL, MongoDB, Docker, and Kubernetes learning.",
  },
];

function answer(question: string) {
  const normalized = question.toLowerCase();
  const match = knowledge.find((entry) =>
    entry.keys.some((key) => normalized.includes(key)),
  );

  return (
    match?.answer ||
    "Hammad is a Next.js and AI-focused developer building premium interfaces, dashboards, ecommerce flows, Sanity blogs, FastAPI projects, and agent-powered workflows. Ask me about his projects, stack, AI direction, or contact details."
  );
}

const Assistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I am Hammad's AI assistant. Ask me anything about his work, skills, projects, or contact details.",
    },
  ]);

  const ask = async (value = input) => {
    const question = value.trim();
    if (!question) return;
    setLoading(true);
    setMessages((current) => [
      ...current,
      { role: "user", text: question },
    ]);
    setInput("");

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        { role: "assistant", text: data.answer || answer(question) },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", text: answer(question) },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="floating-assistant">
      {open ? (
        <div className="floating-assistant-panel">
          <div className="floating-assistant-head">
            <div>
              <h3>Hammad AI</h3>
              <p>Ask about skills, projects, availability</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant">
              <FiX />
            </button>
          </div>

            <div className="floating-assistant-messages">
              {messages.map((message, index) => (
                <p className={`assistant-message ${message.role}`} key={`${message.role}-${index}`}>
                  {message.text}
                </p>
              ))}
              {loading ? (
                <p className="assistant-message assistant">Thinking...</p>
              ) : null}
            </div>

          <div className="floating-assistant-prompts">
            {prompts.map((prompt) => (
              <button type="button" onClick={() => ask(prompt)} key={prompt}>
                {prompt}
              </button>
            ))}
          </div>

          <form
            className="floating-assistant-input"
            onSubmit={(event) => {
              event.preventDefault();
              ask();
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Hammad..."
            />
            <button type="submit" aria-label="Send question">
              <FiSend />
            </button>
          </form>
        </div>
      ) : null}

      <button
        className="floating-assistant-button"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open AI assistant"
      >
        <FiMessageCircle />
      </button>
    </div>
  );
};

export default Assistant;
