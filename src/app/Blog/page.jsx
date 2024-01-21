import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export const metadata = {
  title: "Blog"
}

function page() {
  return (
    <div className='h-[370vh] montserrat-font w-auto'>
          <div className='blog-img flex justify-center items-center h-[75vh] w-auto'>
          <h1 className='text-5xl mt-6 text-white montserrat-font tracking-widest font-bold'>BLOG</h1>
          </div>
          <div className=' flex justify-center h-[290vh] w-auto items-center flex-col '>
            <div>
              <div className=' rounded-lg h-[55vh] w-[53vw] overflow-hidden'>
          <div className='blog-bg rounded-lg hover:scale-110 duration-500 h-[55vh] w-[53vw]'>
              
          </div>
          </div>
          <div className='flex justify-center mr-24 mt-5 items-start flex-col'>
             <h1 className='tracking-widest mt-4 mb-5 text-2xl font-semibold'>COOKING RECIPE DELICIOUS</h1>
             <p className='mb-5 text-xs font'>by Admin | 28 December, 2018 | Cooking, Food | 8 Comments</p>
            <p className='text-sm font-normal opacity-70'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget <br /> dictum tortor. Donec dictum vitae sapien eu varius</p>
            <a href='' className='py-2 mt-4 hover:text-red-600 text-xs montserrat-font text-black uppercase bg-white rounded-xl'>CONTINUE READING <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </a>
          </div>
          </div>
            <div className='mt-8'>
              <div className='rounded-lg h-[55vh] overflow-hidden w-[53vw] '>
          <div className='blog-bg1 rounded-lg hover:scale-110 duration-500 h-[55vh] w-[53vw]'>
              
          </div>
          </div>
          <div className='flex justify-center mr-24 mt-5 items-start flex-col'>
             <h1 className='tracking-widest mt-4 mb-5 text-2xl font-semibold'>PIZZA IS PREPARED FRESH</h1>
             <p className='mb-5 text-xs font'>by Admin | 28 December, 2018 | Cooking, Food | 8 Comments</p>
            <p className='text-sm font-normal opacity-70'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget <br /> dictum tortor. Donec dictum vitae sapien eu varius</p>
            <a href='' className='py-2 mt-4 hover:text-red-600 text-xs montserrat-font text-black uppercase bg-white rounded-xl'>CONTINUE READING <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </a>
          </div>
          </div>
            <div className='mt-8'>
              <div className='rounded-lg h-[55vh] w-[53vw] overflow-hidden '>
          <div className='blog-bg2 rounded-lg hover:scale-110 duration-500 h-[55vh] w-[53vw]'>
              
          </div>
          </div>
          <div className='flex justify-center mr-24 mt-5 items-start flex-col'>
             <h1 className='tracking-widest mt-4 mb-5 text-2xl font-semibold'>STYLE THE WEDDING PARTY</h1>
             <p className='mb-5 text-xs font'>by Admin | 28 December, 2018 | Cooking, Food | 8 Comments</p>
            <p className='text-sm font-normal opacity-70'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget <br /> dictum tortor. Donec dictum vitae sapien eu varius</p>
            <a href='' className='py-2 mt-4 hover:text-red-600 text-xs montserrat-font text-black uppercase bg-white rounded-xl'>CONTINUE READING <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </a>
          </div>
          </div>
          </div>
    </div>
  )
}

export default page