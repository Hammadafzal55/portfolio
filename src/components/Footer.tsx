import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/55">
      <div className="container flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© 2026 Hammad Afzal. All rights reserved.</p>
        <p className="text-white/40">Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
