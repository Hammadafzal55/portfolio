import React from 'react'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Hammad Afzal</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menulink'><a href='#hero'>Home</a></li>
                <li className='menulink'><a href='#about'>About</a></li>
                <li className='menulink'><a href='#projects'>Projects</a></li>
                <li className='menulink'><a href='#skills'>Skills</a></li>
                <li className='menulink'><a href='#contact'>Contact</a></li>
            </ul>
            <FiMenu className='md:hidden' size={30}/>
        </div>

    </div>
  )
}

export default Navbar