import React from "react";

interface propsType {
  title: string;
  eyebrow?: string;
  align?: "left" | "center";
}

const Heading: React.FC<propsType> = ({ title, eyebrow, align = "center" }) => {
  return (
    <div
      className={`pb-8 ${align === "center" ? "text-center" : "text-left"}`}
      data-aos="zoom-in-up"
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
