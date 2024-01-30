import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiSwiggy } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { LuClock10 } from "react-icons/lu";

function page() {
  return (
    <div className='h-[153vh] lg:h-[120vh] w-auto'>
           <footer className='montserrat-font text-white h-[140vh] bg-[#222] w-auto'>
            <div className='flex justify-center flex-col pt-14 items-center gap-16'>
                <div>
                     <h1 className='tracking-widest mb-8 font-semibold text-xl '>CONTACT US</h1>
                     <div>
                        <p className='text-xs opacity-50 font-medium'> <IoLocationSharp className='inline-block mb-1 text-lg' /> 8th floor, 379 Hudson St, New York, NY 118</p>
                        <p className='text-xs opacity-50 mt-4 font-medium'> <IoMdCall className='inline-block mb-1 mr-1 text-base' /> (+1) 123-456-8910</p>
                        <p className='text-xs opacity-50 mt-4 font-medium'>< IoMdMail className='inline-block mr-2 text-base mb-1' />contact@site.com</p>
                     </div>
                </div>
                <div>
                     <h1 className='tracking-widest mb-6 font-semibold text-xl '>LATEST TWITTER</h1>
                     <div>
                        <p className='text-red-600 text-xs font-medium'> <FaTwitter className=' text-white inline-block mr-1' /> @colorlib</p>
                        <p className='text-xs opacity-50 mt-2 font-medium'>Activello is a good option. It has a slider built</p>
                        <p className='text-xs mb-2 text-red-600 font-medium'>https://buff.ly/2zaSfAQ</p>
                        <p className='text-xs opacity-50'>7 Aug 2019</p>
                     </div>
                     <div className='flex justify-center gap-56 mt-6 items-center'>
             <div className=''>
                <h1 className='text-red-600 text-xs font-medium'> <FaTwitter className='inline-block text-white mr-1' /> @colorlib </h1>
                <p className='text-xs opacity-50 mt-6'>Activello is a good option. It has a slider built <br /> into that displays <span className='text-red-600 opacity-100'>https://buff.ly/2zaSfAQ</span></p>
          <p className='text-xs opacity-50 mt-3'>21 Dec 2017</p>
             </div>
             </div>
                </div>
                <div className='w-[70vw] h-[17vh]'>
                <h1 className='tracking-widest mb-8 font-semibold text-xl'>OPENING TIMES</h1>
                <p className='text-xs opacity-50 mt-4 font-medium'> <LuClock10 className=' mr-2 text-sm mb-1 inline-block' />09:30 AM – 11:00 PM</p>
                <p className='text-xs mt-4 opacity-50 font-medium'>Every Day</p>
             </div>
                <div>
                     <h1 className='tracking-widest font-semibold mb-8 text-xl '>GALLERY</h1>
                     <div className='flex justify-center items-center gap-4'>
                        <div className='h-[10vh] w-[20vw] overflow-hidden'>
                        <div className='w-[20vw] hover:scale-105 duration-500 lawra-1 h-[10vh]'>

                        </div>
                        </div>
                        <div className='h-[10vh] w-[20vw] overflow-hidden'>
                        <div className='w-[20vw] hover:scale-105 duration-500  lawra-2 h-[10vh]'>

                        </div>
                        </div>
                        <div className='h-[10vh] w-[20vw] overflow-hidden'>
                        <div className='w-[20vw] hover:scale-105 duration-500 lawra-3 h-[10vh]'>

                        </div>
                        </div>
                     </div>
                </div>
             </div>
           </footer>
           <div className='bg-black text-white flex  justify-around items-center h-[13vh] w-auto '>
                 <div className='flex gap-4'>
                    <span><FaFacebookF className='text-lg hover:text-red-600 duration-500 cursor-pointer text-white' /></span>
                    <span><FaInstagram className='text-lg hover:text-red-600 duration-500 cursor-pointer text-white' /></span>
                    <span><SiSwiggy className='text-lg hover:text-red-600 duration-500 cursor-pointer text-white' /></span>
                 </div>
                 <div>
                     <h1 className='text-sm opacity-80 font-semibold'>@ 2017 Colorlib. Get The Theme</h1>
                 </div>
           </div>
    </div>
  )
}

export default page