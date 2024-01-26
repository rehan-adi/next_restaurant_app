import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export const metadata = {
  title: "Blog"
}

function page() {
  return (
    <div className='h-[330vh] lg:h-[415vh] montserrat-font w-auto'>
          <div className='blog-img flex justify-center items-center h-[75vh] w-auto'>
          <h1 className='text-3xl mt-6 lg:text-5xl text-white montserrat-font tracking-widest font-bold'>BLOG</h1>
          </div>
          <div className=' flex justify-center h-[260vh] lg:h-[340vh] w-auto items-center flex-col '>
            <div className='flex justify-center items-center flex-col'>
              <div className=' rounded-lg lg:h-[60vh] lg:w-[70vw] h-[25vh] w-[90vw] overflow-hidden'>
          <div className='blog-bg rounded-lg lg:h-[60vh] lg:w-[70vw] hover:scale-110 duration-500 h-[25vh] w-[90vw]'>
              
          </div>
          </div>
          <div className='flex justify-center w-[70vw] lg:items-start mt-5 items-center flex-col'>
             <h1 className='tracking-widest text-center mt-4 mb-5 lg:mb-2 text-2xl font-semibold'>COOKING RECIPE DELICIOUS</h1>
             <div className='w-[90vw] flex justify-center lg:justify-start items-center h-[5vh] lg:px-0 px-3'>
             <p className='mb-5 mt-3 lg:mt-2 text-xs font'>by Admin | 28 December, 2018 | Cooking, Food | 8 Comments</p>
             </div>
             <div className='h-[4vh] mt-5 mb-10 lg:mb-2 lg:mt-3 lg:h-[10vh] lg:w-[50vw] w-[90vw]'>
             <p className='text-sm font-normal opacity-90'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget  dictum tortor. Donec dictum vitae sapien eu varius</p>
             </div>
            <a href='' className='py-2 mt-10 lg:mt-0 hover:text-red-600 text-xs montserrat-font text-black uppercase bg-white rounded-xl'>CONTINUE READING <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </a>
          </div>
          </div>
            <div className='mt-20 flex w-auto justify-center items-center flex-col'>
              <div className='rounded-lg h-[25vh] lg:h-[60vh] lg:w-[70vw] overflow-hidden w-[90vw] '>
          <div className='blog-bg1 rounded-lg hover:scale-110 duration-500 lg:h-[60vh] lg:w-[70vw] h-[25vh] w-[90vw]'>
              
          </div>
          </div>
          <div className='flex justify-center mt-5 lg:items-start lg:w-[70vw] items-center flex-col'>
             <h1 className='tracking-widest mt-4 mb-5 text-center text-2xl font-semibold'>PIZZA IS PREPARED FRESH</h1>
             <div className='w-[90vw] flex justify-center lg:justify-start lg:px-0 items-center h-[5vh] px-3'>
             <p className='mb-5 mt-3 lg:mt-0 text-xs font'>by Admin | 12 December, 2023 | Cooking, Food | 3 Comments</p>
             </div>
             <div className='h-[4vh] mt-5 mb-10 lg:mb-2 lg:mt-3 lg:h-[10vh] lg:w-[50vw] w-[90vw]'>
             <p className='text-sm font-normal opacity-90'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget  dictum tortor. Donec dictum vitae sapien eu varius</p>
             </div>
             <a href='' className='py-2 mt-10 lg:mt-0 hover:text-red-600 text-xs montserrat-font text-black uppercase bg-white rounded-xl'>CONTINUE READING <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </a>
          </div>
          </div>
            <divvv className='mt-20 flex justify-center items-center flex-col'>
              <div className='rounded-lg h-[25vh] w-[90vw] lg:h-[60vh] lg:w-[70vw] overflow-hidden '>
          <div className='blog-bg2 rounded-lg hover:scale-110 duration-500 lg:h-[60vh] lg:w-[70vw] h-[25vh] w-[90vw]'>
              
          </div>
          </div>
          <div className='flex justify-center mt-5 items-center w-[70vw] lg:items-start flex-col'>
             <h1 className='tracking-widest mt-4 text-center mb-5 text-2xl font-semibold'>STYLE THE WEDDING PARTY</h1>
             <div className='w-[90vw] flex justify-center lg:justify-start lg:px-0 items-center h-[5vh] px-3'>
                 <p className='mb-5 mt-3 lg:mt-0 text-xs font'>by Admin | 26 December, 2024 | Cooking, Food | 12 Comments</p>
             </div>
             <div className='h-[4vh] mt-5 mb-10 lg:mt-3 lg:mb-2 lg:h-[10vh] lg:w-[50vw] w-[90vw]'>
             <p className='text-sm font-normal opacity-90'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget  dictum tortor. Donec dictum vitae sapien eu varius</p>
             </div>
             <a href='' className='py-2 mt-10 pb-10 lg:mt-0 hover:text-red-600 text-xs montserrat-font text-black uppercase bg-white rounded-xl'>CONTINUE READING <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </a>
          </div>
          </divvv>
          </div>
    </div>
  )
}

export default page