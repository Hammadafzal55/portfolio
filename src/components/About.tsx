import React from "react";

const journey = [
  {
    year: "Phase 01",
    title: "Frontend foundations",
    text: "I started by building focused interfaces: resume pages, timers, calculators, real estate layouts, food websites, and ecommerce practice screens with HTML, CSS, TypeScript, and Tailwind CSS.",
  },
  {
    year: "Phase 02",
    title: "Next.js product work",
    text: "I moved into React and Next.js projects: Foodtuck, Exclusive, crypto dashboards, Sanity blogs, and polished portfolio experiences with stronger UI systems and deployable structure.",
  },
  {
    year: "Phase 03",
    title: "AI and backend direction",
    text: "My current direction connects GIAIC learning with real builds: FastAPI, Python, OpenAI Agents SDK, Docusaurus docs, vector embeddings, robotics content, and AI-assisted workflow apps.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div data-aos="zoom-in-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            About
          </p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            A builder learning the future by shipping the present.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <p
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5 leading-8 text-white/68"
            data-aos="zoom-in-up"
          >
            I am Hammad Afzal, a GIAIC student focused on Artificial
            Intelligence, Web 3.0, and Metaverse technologies. My practical
            strength is building modern web interfaces that feel polished,
            responsive, and ready to deploy.
          </p>
          <p
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5 leading-8 text-white/68"
            data-aos="zoom-in-up"
          >
            I am growing from frontend specialist into AI-enabled full-stack
            builder: Next.js on the interface, Sanity for content, FastAPI and
            Python for backend logic, and agent workflows for smarter products.
          </p>
        </div>
      </div>
      <div className="container mt-10">
        <div className="journey-grid">
          {journey.map((item, index) => (
            <article
              className="journey-card"
              style={{ animationDelay: `${index * 0.16}s` }}
              data-aos="zoom-in-up"
              key={item.title}
            >
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
