import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiSwiggy } from "react-icons/si";

function page() {
  return (
    <nav className='w-screen montserrat-font h-[15vh] px-20  fixed text-white flex justify-around items-center'>
        <div className='flex justify-center items-center'>
            <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png" alt="" />
        </div>
        <ul className='flex text-sm gap-10'>
            <li>HOME</li>
            <li>MENU</li>
            <li>RESERVATION</li>
            <li>GALLERY</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>CONTACT</li>
        </ul>
        <div className='flex items-center gap-6'>
           <span><FaFacebookF  className='text-xl text-white' /></span>
           <span><FaInstagram className='text-xl text-white'  /></span>
           <span><SiSwiggy  className='text-xl text-white'  /></span>
        </div>
    </nav>
  )
}

export default page