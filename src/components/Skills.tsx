import React from "react";
import { FiCpu, FiDatabase, FiLayers, FiShield } from "react-icons/fi";
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSanity,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skillGroups = [
  {
    icon: FiLayers,
    title: "Frontend Systems",
    desc: "Responsive interfaces, reusable components, animation-heavy landing pages, portfolio systems, dashboards, ecommerce templates, and clean product screens built with React, Next.js, TypeScript, Tailwind CSS, HTML, CSS, and JavaScript.",
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: FiDatabase,
    title: "Full-stack Integrations",
    desc: "Practical experience connecting frontend products with content, authentication, payments, APIs, backend logic, and databases so projects feel like usable applications instead of static pages.",
    items: ["Sanity", "Clerk", "Stripe", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Auth.js"],
  },
  {
    icon: FiCpu,
    title: "AI & Future Web",
    desc: "GIAIC learning path focused on Artificial Intelligence, Web 3.0, Metaverse concepts, Python, FastAPI, OpenAI Agents SDK, vector embeddings, and AI-assisted product workflows.",
    items: ["AI", "Python", "FastAPI", "OpenAI Agents", "Vector Embeddings", "Web 3.0"],
  },
  {
    icon: FiShield,
    title: "Production Mindset",
    desc: "Attention to accessibility, responsive behavior, clear content hierarchy, performance, deployable Next.js structure, Docker-ready thinking, and scalable engineering habits.",
    items: ["UX polish", "Responsive UI", "Performance", "Docker", "Kubernetes", "Deployment"],
  },
];

const skillIcons = [
  { label: "Next.js", icon: SiNextdotjs },
  { label: "React", icon: SiReact },
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind", icon: SiTailwindcss },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Express", icon: SiExpress },
  { label: "Sanity", icon: SiSanity },
  { label: "Python", icon: SiPython },
  { label: "FastAPI", icon: SiFastapi },
  { label: "OpenAI", icon: SiOpenai },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "MongoDB", icon: SiMongodb },
  { label: "Docker", icon: SiDocker },
  { label: "Kubernetes", icon: SiKubernetes },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="sticky top-8" data-aos="zoom-in-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Capabilities
            </p>
            <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
              Skills & Tools
            </h2>
            <h3 className="text-2xl font-bold leading-tight text-white/88 md:text-3xl">
              The stack behind the work.
            </h3>
            <p className="mt-5 text-lg leading-9 text-white/68">
              I specialize in frontend development and keep expanding toward
              full-stack and AI-powered product work. My stack now covers
              interface engineering, API integration, CMS workflows, backend
              services, databases, containers, and agent-based systems. The goal
              is simple: build products that look premium, load cleanly, and
              make sense to real users.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article
                  className="skill-card rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-accent/50 hover:bg-white/[0.07]"
                  data-aos="zoom-in-up"
                  key={group.title}
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-accent text-2xl text-black">
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                  <p className="mt-3 min-h-24 leading-7 text-white/60">
                    {group.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item, index) => (
                      <span
                        className="skill-chip rounded-full border border-white/10 px-3 py-1 text-sm text-white/70"
                        style={{ animationDelay: `${index * 0.08}s` }}
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="skills-icons-intro" data-aos="zoom-in-up">
          <p>Technology Toolkit</p>
          <h3>Animated skills I use across frontend, backend, AI, and deployment.</h3>
        </div>
        <div className="skill-orbit-grid mt-12">
          {skillIcons.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                className="skill-orbit-item"
                style={{ animationDelay: `${index * 0.12}s` }}
                data-aos="zoom-in-up"
                key={skill.label}
              >
                <Icon />
                <span>{skill.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
