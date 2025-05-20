import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">Languages And Frameworks I Use</h2>
          <p className='text-gray-500 pt-2'>
            I am an Experianced Web Developer, specializing in Html, Css, Typescript, NExt.js, React, TailwindCss.I create dynamic and user-friendly websites using React and Next.js. My experiance also extends towards fullstack using Sanity, Clerk Stripe and others.With a passion for learning. I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-3 text-accent text-3xl sm:text-4xl'>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Sanity</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Clerk</h2>
              <h2 data-aos="zoom-in-up">Stripe</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">Css</h2>
              <h2 data-aos="zoom-in-up">Html</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
