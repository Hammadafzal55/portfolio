"use client";

import { useEffect, useState } from "react";

const bootLines = [
  "initializing Next.js runtime",
  "hydrating portfolio assistant",
  "mounting Three.js visual layer",
  "loading project intelligence",
];

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader" role="status" aria-live="polite">
      <div className="preloader-core">
        <div className="preloader-ring" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            HammadOS
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Building interface...
          </h2>
        </div>
        <div className="mt-6 space-y-2">
          {bootLines.map((line, index) => (
            <p className="boot-line" style={{ animationDelay: `${index * 0.18}s` }} key={line}>
              <span>0{index + 1}</span> {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
