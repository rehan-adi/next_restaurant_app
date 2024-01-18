import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiSwiggy } from "react-icons/si";

function page() {
  return (
    <div className='h-screen  w-auto'>
           <div className='bg-gray-100 flex justify-center items-center gap-10 montserrat-font  w-auto h-[30vh]'>
                <h1 className='text-2xl tracking-widest font-semibold '>SPECIALS SIGN UP</h1>
                <input type="text" className='pr-12 border border-[#d9d9d9] rounded-lg  pl-4 text-sm py-3' placeholder='Email Address' id="" />
                <button className='bg-black text-white px-8 py-3 rounded-lg text-sm'>SINGH - UP</button>
           </div>
           <footer className='montserrat-font text-white w-auto h-[60vh] bg-[#222]'>
            <div className='flex justify-center pt-14 items-center gap-40'>
                <div>
                     <h1 className='tracking-widest mb-8 font-semibold text-xl '>CONTACT US</h1>
                     <div>
                        <p className='text-xs opacity-50 font-medium'> 8th floor, 379 Hudson St, New York, NY 10018</p>
                        <p className='text-xs opacity-50 mt-4 font-medium'> (+1) 123-456-8910</p>
                        <p className='text-xs opacity-50 mt-4 font-medium'>contact@site.com</p>
                     </div>
                </div>
                <div>
                     <h1 className='tracking-widest mb-6 font-semibold text-xl '>LATEST TWITTER</h1>
                     <div>
                        <p className='text-red-600 text-xs font-medium'> @colorlib</p>
                        <p className='text-xs opacity-50 mt-2 font-medium'>Activello is a good option. It has a slider built</p>
                        <p className='text-xs mb-2 text-red-600 font-medium'>https://buff.ly/2zaSfAQ</p>
                        <p className='text-xs opacity-50'>7 Aug 2019</p>
                     </div>
                </div>
                <div>
                     <h1 className='tracking-widest font-semibold mb-8 text-xl '>GALLERY</h1>
                     <divvv className='flex justify-center items-center gap-4'>
                        <div className='h-[10vh] w-[5vw] overflow-hidden'>
                        <div className='w-[5vw] hover:scale-105 duration-500 lawra-1 h-[10vh]'>

                        </div>
                        </div>
                        <div className='h-[10vh] w-[5vw] overflow-hidden'>
                        <div className='w-[5vw] hover:scale-105 duration-500  lawra-2 h-[10vh]'>

                        </div>
                        </div>
                        <div className='h-[10vh] w-[5vw] overflow-hidden'>
                        <div className='w-[5vw] hover:scale-105 duration-500 lawra-3 h-[10vh]'>

                        </div>
                        </div>
                     </divvv>
                </div>
             </div>
             <div className='flex justify-center mr-12 gap-56 mt-6 items-center'>
             <div className='mr-4'>
                <h1 className='tracking-widest mb-8 font-semibold text-xl'>OPENING TIMES</h1>
                <p className='text-xs opacity-50 mt-4 font-medium'>09:30 AM – 11:00 PM</p>
                <p className='text-xs mt-4 opacity-50 font-medium'>Every Day</p>
             </div>
             <div className='mr-[380px]'>
                <h1 className='text-red-600 text-xs font-medium'> @colorlib </h1>
                <p className='text-xs opacity-50 mt-6'>Activello is a good option. It has a slider built <br /> into that displays <span className='text-red-600 opacity-90'>https://buff.ly/2zaSfAQ</span></p>
          <p className='text-xs opacity-50 mt-3'>21 Dec 2017</p>
             </div>
             </div>
           </footer>
           <div className='bg-black text-white flex px-[200px] justify-between items-center h-[10vh] w-auto '>
                 <div className='flex gap-6'>
                    <span><FaFacebookF className='text-xl hover:text-red-600 duration-500 cursor-pointer text-white' /></span>
                    <span><FaInstagram className='text-xl hover:text-red-600 duration-500 cursor-pointer text-white' /></span>
                    <span><SiSwiggy className='text-xl hover:text-red-600 duration-500 cursor-pointer text-white' /></span>
                 </div>
                 <div>
                     <h1 className='text-sm font-semibold'>@ 2017 Colorlib. Get The Theme</h1>
                 </div>
           </div>
    </div>
  )
}

export default page