import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <div className='bg-gradient-to-r from-blue-500 via-red-500 to-green-500 bg-clip-text text-4xl text-transparent tracking-tighter'>My Portfolio</div>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a className='text-blue-700 rounded bg-white' href="https://www.linkedin.com/in/aliagazade"><FaLinkedin /></a>
        <a className=' text-white bg-black rounded ' href="https://github.com/Agazadea-Ali"><FaGithub /></a>
        <a className=' bg-gradient-to-br from-pink-500 to-yellow-500 rounded text-white' href="https://www.instagram.com/aliagazade_777"><FaInstagram /></a>
        <a className='bg-green-500 text-white  rounded' href="https://wa.me/994516651777"><FaWhatsapp /></a>
      </div>
    </nav>
  )
}

export default Navbar