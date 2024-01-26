
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiSwiggy } from 'react-icons/si';
import { RiMenu3Fill } from 'react-icons/ri';

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-screen montserrat-font h-[14vh] px-6 lg:px-40 fixed text-white flex lg:fixed justify-between items-center'>
      <div className='flex justify-center items-center'>
        <img
          src='https://preview.colorlib.com/theme/pato/images/icons/logo.png'
          alt=''
          className='lg:w-30 md:w-28 w-20' 
        />
      </div>
      <div className={`lg:flex hidden text-sm gap-10 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <Link href='/'>
          <div className='hover:text-red-600 duration-500 cursor-pointer'>HOME</div>
        </Link>
        <Link href='/Menu'>
          <div className='hover:text-red-600 duration-500 cursor-pointer'>MENU</div>
        </Link>
        <Link href='/Reservation'>
          <div className='hover:text-red-600 duration-500 cursor-pointer'>RESERVATION</div>
        </Link>
        <Link href='/About'>
          <div className='hover:text-red-600 duration-500 cursor-pointer'>ABOUT</div>
        </Link>
        <Link href='/Blog'>
          <div className='hover:text-red-600 duration-500 cursor-pointer'>BLOG</div>
        </Link>
        <Link href='/Contact'>
          <div className='hover:text-red-600 duration-500 cursor-pointer'>CONTACT</div>
        </Link>
      </div>
      <div className='flex items-center justify-center gap-6'>
        <div className='flex items-center justify-center lg:gap-6 gap-3'>
          <span>
            <FaFacebookF className='text-lg lg:text-xl hover:text-red-600 duration-500 cursor-pointer text-white' />
          </span>
          <span>
            <FaInstagram className='text-lg lg:text-xl hover:text-red-600 duration-500 cursor-pointer text-white' />
          </span>
          <span>
            <SiSwiggy className='text-lg lg:text-xl hover:text-red-600 duration-500 cursor-pointer text-white' />
          </span>
        </div>
        <div className='md:hidden'>
          <button className='text-white' onClick={toggleMenu}>
            <RiMenu3Fill className='text-3xl mt-2' />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden fixed inset-0 bg-black bg-opacity-75 z-50'>
          <div className='p-4 text-white w-[100vw] fixed right-0 top-0 h-full bg-black'>
            <div className='text-white cursor-pointer mb-2' onClick={toggleMenu}>
              Close
            </div>
            <Link href='/'>
              <div className='hover:text-red-600 duration-500 cursor-pointer mb-2'>HOME</div>
            </Link>
            <Link href='/Menu'>
              <div className='hover:text-red-600 duration-500 cursor-pointer mb-2'>MENU</div>
            </Link>
            <Link href='/Reservation'>
              <div className='hover:text-red-600 duration-500 cursor-pointer mb-2'>RESERVATION</div>
            </Link>
            <Link href='/About'>
              <div className='hover:text-red-600 duration-500 cursor-pointer mb-2'>ABOUT</div>
            </Link>
            <Link href='/Blog'>
              <div className='hover:text-red-600 duration-500 cursor-pointer mb-2'>BLOG</div>
            </Link>
            <Link href='/Contact'>
              <div className='hover:text-red-600 duration-500 cursor-pointer mb-2'>CONTACT</div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Page;
