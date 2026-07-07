import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

interface  propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
    type?: string;
    href?: string;
}

const Card: React.FC<propsType> = ({ title, desc, img, tags, type, href }) => {
  const content = (
    <>
      <div className="relative aspect-[16/11] overflow-hidden bg-white/5">
        <Image
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          src={img}
          width={640}
          height={440}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs text-white/75 backdrop-blur">
            {type}
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-black">
            <FiArrowUpRight />
          </span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <h3 className="text-2xl font-bold leading-tight text-white">{title}</h3>
        <p className="min-h-20 leading-7 text-white/62">{desc}</p>
        <div className="flex flex-wrap">
          {tags.map((el) => (
            <span className="tags" key={el}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const className =
    "group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-accent/60 hover:bg-white/[0.07]";

  if (!href) {
    return (
      <article className={className} data-aos="zoom-in-up">
        {content}
      </article>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-accent/60 hover:bg-white/[0.07]"
      data-aos="zoom-in-up"
    >
      {content}
    </a>
  );
};

export default Card;
