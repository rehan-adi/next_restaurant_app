import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function page() {
  return (
    <main className='h-[180vh]  text-black w-auto '>
        <div className='img-1 text-white flex justify-center items-center flex-col w-full h-[100vh]'>
             <h2 className='text-6xl courgette-font font-medium'>Welcome to </h2>
             <h1 className='text-8xl mt-6 montserrat-font tracking-widest font-bold'>PATO PLACE</h1>
             <button className='px-7 py-3 mt-12 text-xs montserrat-font uppercase bg-white text-red-600 rounded-xl'>Look Menu</button>
        </div>
        <div className='h-[80vh] flex justify-center gap-36 items-center w-auto bg-white '>
          <div className=''>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Italian Restaurant</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>WELCOME</h1>
               <p className=' text-center mt-10 font-semibold opacity-65'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed <br /> fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis <br /> ligula sem id neque.</p>
               <p className='hover:text-red-500 mt-6 text-sm opacity-65 text-center duration-500'>OUR STORY <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </p>
          </div>
          <div className='w-[25vw] rounded-xl h-[50vh] bg-red-500'>
             <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
          </div>
        </div>
    </main>
  )
}

export default page