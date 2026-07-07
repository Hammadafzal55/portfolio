"use client";

import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const emailAddress = "hammadafzaln@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const copyEmail = async () => {
    await navigator.clipboard.writeText(emailAddress);
    setStatus("Email copied. No browser mail redirect opened.");
  };

  const sendMessage = async () => {
    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
        return;
      }

      const data = await response.json();
      setStatus(data.error || "Message could not be sent yet.");
      return;
    } catch {
      setStatus("Message could not be sent. Please copy the email and contact directly.");
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="container">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-5 md:grid-cols-2 md:p-8">
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Contact
              </p>
              <h2 className="text-4xl font-black leading-tight text-white md:text-6xl" data-aos="zoom-in-up">
                Let&apos;s build something useful.
              </h2>
              <p className="pt-5 text-[18px] leading-8 text-white/62" data-aos="zoom-in-up">
                Send a quick brief for a portfolio, frontend, commerce, or
                Next.js project. I will respond with a clear next step.
              </p>
            </div>
            <div className="space-y-4">
              <button className="flex items-center gap-3 text-left text-white/80 transition hover:text-accent" type="button" onClick={copyEmail} data-aos="zoom-in-up">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-black">
                  <AiOutlineMail size={22} />
                </span>
                {emailAddress}
              </button>
              <a className="flex items-center gap-3 text-white/80 transition hover:text-accent" href="tel:+923238020704" data-aos="zoom-in-up">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-black">
                  <BsTelephone size={20} />
                </span>
                0323 8020704
              </a>
            </div>
          </div>
          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <div className="flex flex-col gap-2" data-aos="zoom-in-up">
              <label className="text-sm text-white/65" htmlFor="name">Name</label>
              <input type="text" 
                className="h-12 rounded-lg border border-white/10 bg-black/30 px-4 outline-none transition focus:border-accent/70"
                id='name'
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
                value={form.name}
              />
            </div>
            <div className="flex flex-col gap-2" data-aos="zoom-in-up">
              <label className="text-sm text-white/65" htmlFor="email">Email</label>
              <input type="email" 
                className="h-12 rounded-lg border border-white/10 bg-black/30 px-4 outline-none transition focus:border-accent/70"
                id="email"
                onChange={(event) =>
                  setForm((current) => ({ ...current, email: event.target.value }))
                }
                value={form.email}
              />
            </div>
            <div className="flex flex-col gap-2" data-aos="zoom-in-up">
              <label className="text-sm text-white/65" htmlFor="msg">Message</label>
                <textarea 
                className="rounded-lg border border-white/10 bg-black/30 p-4 outline-none transition focus:border-accent/70"
                id="msg"
                rows={8}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                value={form.message}
              ></textarea>
            </div>
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-semibold text-black transition hover:bg-white" data-aos="zoom-in-up" type="submit">
              Send Message <FiArrowUpRight />
            </button>
            {status ? <p className="text-sm text-white/55">{status}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
