import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
  {
    id: 0,
    title: "Simple Resume",
    desc: "It is a simple resume using Html Css Typescript.",
    img: "/images/resume.png",
    tags: ["HTML", "CSS", "Node", "Typescrpt"],
  },
 {
    id: 1,
    title: "Simple Calculator",
    desc: "A simple calculator using Html Css and Typescipt.It performs all the basic functions.",
    img: "/images/claculator.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Currency Convertor",
    desc: "A Currency Converter Using Html Css Typescript.It converts values between different currencies",
    img: "/images/currency convertor.png",
    tags: ["HTML", "CSS", "Node", "Typescript"],
  },{
    id: 3,
    title: "Real estate website",
    desc: "A simple real estate website using Html Css Typescript.It's was a dummy website to increase inderstanding about frontend.",
    img: "/images/real estate web.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
 {
    id: 4,
    title: "Shoes website",
    desc: "A simple Shoes website using Html Css Typescript.It's was a dummy website to increase inderstanding about frontend.",
    img: "/images/shoes.png",
    tags: ["HTML","CSS","Node","Typescript"],
  },
   {
    id: 5,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript powered website to track time",
    img: "/images/timer.png",
    tags: ["Next.js","Node","TailwindCss","TypeScript"],
  },
  {
    id: 6,
    title: "Weather App",
    desc: "A Next.js Powered Wheather that tells the Wheather conditions of different Places.",
    img: "/images/wheater app.png",
    tags: ["Next.js", "Node", "TailwindCss", "Typescript"],
  },
  {
    id: 7,
    title: "Food Tuck Website",
    desc: "A simple Website Using Next.js Tailwind and typescript.",
    img: "/images/Restaurant.jpg",
    tags: ["Next.js", "TailwindCss", "Node", "Typescript"],
  },
  {
    id: 8,
    title: "Q-commerce Website",
    desc: "A Complete FullStack Web using Next.js TailwindCss Sanity Clerk and Stripe.",
    img: "/images/Restaurant.jpg",
    tags: ["Next.js", "TailwindCss", "Sanity", "Clerk", "Stripe", "Typescript", "Node", "authjs"],
  }
]

const Projects = () => {
  return (
    <div id='projects' className='conatiner pt-32'>
      <Heading title='My Projects' />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects