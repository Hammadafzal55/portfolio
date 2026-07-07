import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-ink text-white">
      <div className="absolute inset-0 hero-grid opacity-70" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-500/20 to-transparent" />
      <Navbar />

      <div className="container relative grid items-center gap-8 py-10 md:py-12 lg:min-h-[calc(100vh-88px)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/75 backdrop-blur"
            data-aos="zoom-in-up"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_#08E95E]" />
            Next.js Developer - AI, Web3 & Metaverse learner
          </p>
          <h1
            className="text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl"
            data-aos="zoom-in-up"
          >
            Hammad Afzal
          </h1>
          <h2
            className="mt-5 max-w-3xl text-3xl font-black leading-tight text-white/90 sm:mt-7 sm:text-5xl"
            data-aos="zoom-in-up"
          >
            Building fast digital products with useful, polished interfaces.
          </h2>
          <p
            className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:mt-6 sm:text-lg"
            data-aos="zoom-in-up"
          >
            I build frontend-heavy web experiences with React, Next.js,
            TypeScript, Tailwind CSS, Sanity, FastAPI, and AI tooling. My work
            moves from clean interfaces to real product flows: ecommerce,
            dashboards, docs platforms, blogs, and agent-powered productivity
            apps.
          </p>
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            data-aos="zoom-in-up"
          >
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white"
            >
              View Work <FiArrowUpRight />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/10"
            >
              Hire Me <FiDownload />
            </a>
          </div>

          <div className="mt-8 hidden max-w-2xl grid-cols-3 gap-3 text-center sm:mt-10 sm:grid sm:text-left">
            {[
              ["9+", "Portfolio projects"],
              ["AI", "Agent workflows"],
              ["GIAIC", "AI/Web3 student"],
            ].map(([value, label]) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                key={value}
                data-aos="zoom-in-up"
              >
                <div className="text-xl font-bold text-white sm:text-2xl">
                  {value}
                </div>
                <div className="mt-1 text-xs text-white/55 sm:text-sm">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-first min-h-[320px] sm:min-h-[440px] lg:order-none lg:min-h-[520px]" data-aos="zoom-in-up">
          <div className="hero-image-stage">
            <div className="hero-main-portrait">
              <Image
                src="/images/profile.png"
                alt="Hammad Afzal"
                width={540}
                height={620}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
