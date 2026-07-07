import React from "react";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Interactive Resume",
    desc: "A clean resume interface built with HTML, CSS, and TypeScript to present profile details with a structured layout.",
    img: "/images/resume.png",
    tags: ["HTML", "CSS", "Node", "TypeScript"],
    type: "Personal brand",
    href: "https://milestones1-2-kappa-lake.vercel.app/",
  },
  {
    id: 1,
    title: "Real Estate Website",
    desc: "A frontend practice build for property listings, layout composition, cards, and conversion-focused page sections.",
    img: "/images/real estate web.png",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
    type: "Landing page",
    href: "https://frontend-advance-projects-72kr.vercel.app/",
  },
  {
    id: 2,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript timer experience for tracking time with a clean interaction model.",
    img: "/images/timer.png",
    tags: ["Next.js","Node","Tailwind CSS","TypeScript"],
    type: "Productivity",
    href: "https://countdown-timer-seven-tau.vercel.app/",
  },
  {
    id: 3,
    title: "Foodtuck Fast Food",
    desc: "A restaurant and fast-food experience with a cinematic hero, menu/shop flows, track/contact sections, and polished food brand UI.",
    img: "/images/foodtuck-portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "UI Design", "Food Web"],
    type: "Restaurant app",
    href: "https://foodtuck-fastfood-rest.vercel.app/",
  },
  {
    id: 4,
    title: "Exclusive Hackathon Template",
    desc: "A hackathon practice ecommerce template with category navigation, search, wishlist/cart actions, and a clean product-led homepage.",
    img: "/images/exclusive-portfolio.png",
    tags: ["Next.js", "Template", "Ecommerce", "Hackathon"],
    type: "Practice build",
    href: "https://exclusive-five-omega.vercel.app/",
  },
  {
    id: 5,
    title: "FlowTodo",
    desc: "A five-phase todo application using Next.js, FastAPI, Python, and OpenAI Agents SDK for a smarter productivity workflow.",
    img: "/images/flowtodo-portfolio.png",
    tags: ["Next.js", "FastAPI", "Python", "OpenAI Agents SDK"],
    type: "AI productivity",
    href: "https://flowtodo-ruddy.vercel.app/",
  },
  {
    id: 6,
    title: "Physical AI & Humanoid Robotics",
    desc: "A hackathon documentation and learning platform using Docusaurus, FastAPI, vector embeddings, and robotics-focused AI content.",
    img: "/images/robotics-portfolio.png",
    tags: ["Docusaurus", "FastAPI", "Vector Embeddings", "AI"],
    type: "Hackathon AI",
    href: "https://physical-ai-humaniod-robotics.vercel.app/",
  },
  {
    id: 7,
    title: "Crypto Dashboard",
    desc: "A modern crypto dashboard built with Next.js API fetching, live market-data presentation, and a premium dark analytics UI.",
    img: "/images/crypto-dashboard-portfolio.png",
    tags: ["Next.js", "API Fetching", "CoinGecko", "Dashboard"],
    type: "Data app",
    href: "https://crypto-dashboard-nine-eosin.vercel.app/",
  },
  {
    id: 8,
    title: "Techverse Sanity Blog",
    desc: "A sharp blog experience using Next.js and Sanity CMS for structured content, highlights, categories, and tech storytelling.",
    img: "/images/techverse-blog-portfolio.png",
    tags: ["Next.js", "Sanity", "CMS", "Blog"],
    type: "CMS website",
    href: "https://sanity-blog-web-phi.vercel.app/",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="container">
      <div className="projects-intro" data-aos="zoom-in-up">
        <p>Projects</p>
        <h2>Recent builds, hackathon work, and deployed experiments.</h2>
        <span>
          A curated mix of frontend practice, production-style UI, AI workflows,
          API dashboards, CMS content, and full-stack learning projects.
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        type={el.type}
        href={el.href}
        />))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
