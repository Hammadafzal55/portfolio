"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Assistant from "@/components/Assistant";
import Preloader from "@/components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
   <main className="overflow-hidden">
    <Preloader />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Assistant />
    <Contact />
   </main>
  );
}
