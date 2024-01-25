import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiSwiggy } from "react-icons/si";
import { RiMenu3Fill } from "react-icons/ri";

function page() {
  return (
    <nav className='w-screen montserrat-font h-[12vh] px-1 fixed text-white flex justify-around items-center'>
        <div className='flex justify-center items-center'>
            <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png" alt="" />
        </div>
          <div>
          <ul className='flex hidden text-sm gap-10'>
          <Link href="/">
            <li className='hover:text-red-600 duration-500 cursor-pointer'>HOME</li>
            </Link>
            <Link href="/Menu" >
            <li className='hover:text-red-600 duration-500 cursor-pointer'>MENU</li>
            </Link>
            <Link href="/Reservation">
            <li className='hover:text-red-600 duration-500 cursor-pointer'>RESERVATION</li>
            </Link>
            <Link href="/About">
            <li className='hover:text-red-600 duration-500 cursor-pointer'>ABOUT</li>
            </Link> 
            <Link href="/Blog">
            <li className='hover:text-red-600 duration-500 cursor-pointer'>BLOG</li>
            </Link>
            <Link href="/Contact">
            <li className='hover:text-red-600 duration-500 cursor-pointer'>CONTACT</li>
            </Link>

        </ul>
          </div>
       <div className='flex items-center gap-5'>
       <div className='flex items-center justify-center gap-3'>
           <span><FaFacebookF  className='text-lg hover:text-red-600 duration-500 cursor-pointer text-white' /></span>
           <span><FaInstagram className='text-lg hover:text-red-600 duration-500 cursor-pointer text-white'  /></span>
           <span><SiSwiggy  className='text-lg hover:text-red-600 duration-500 cursor-pointer text-white'  /></span>
        </div>
        <div className='md:hidden'>
        <button className='text-white'><RiMenu3Fill className='text-xl mt-2' />
        </button>
      </div>
       </div>
    </nav>
  )
}

export default page