import React from 'react'
import { IoMdMail } from "react-icons/io";

export const metadata = {
   title : "Menu"
 }
 

function page() {
  return (
    <div className='h-[490vh] montserrat-font w-auto'>
        <div className='h-[75vh] flex justify-center items-center w-auto menu-bg'>
          <h1 className='text-5xl mt-6 text-white montserrat-font tracking-widest font-bold'>PATO MENU</h1>
          </div>
          <div className='flex justify-around mt-20 px-20 ml-5 items-center'>
            <div className=''>
                  <h1 className='tracking-widest text-black mb-9 text-2xl font-semibold'>STARTERS</h1>
                  <div className='flex gap-6  mb-9 items-center'>
                     <p>PINE NUT SBRISALONA</p>
                     <p className='tracking'>..............</p>
                     <p>$29.79</p>
                  </div>
                  <div className='flex  mb-9 items-center gap-6'>
                     <p>AENEAN EU</p>
                     <p className='tracking'>.....................</p>
                     <p>$19.35</p>
                  </div>
                  <div className='flex mb-9 items-center gap-6'>
                     <p>SED FEUGIATE</p>
                     <p className='tracking'> ...................</p>
                     <p className='ml-1'>$25.80</p>
                  </div>
                  <div className='flex mb-9 items-center gap-6'>
                     <p>CONSECTETUR</p>
                     <p className='tracking'>...................</p>
                     <p>$21.89</p>
                  </div>
                  <div className='flex mb-9 items-center gap-6'>
                     <p>CHIKEN RESMI CABAB</p>
                     <p className='tracking'>..............</p>
                     <p>$33.59</p>
                  </div>
                  <div className='flex items-center gap-6'>
                     <p>CHEESE ROLL</p>
                     <p className='tracking'>...................</p>
                     <p>$47.24</p>
                  </div>
                  </div>
                  <div>
                  <h1 className='tracking-widest mb-9 text-black text-2xl font-semibold'>MAIN</h1>
                  <div className='flex mb-9 gap-6 items-center'>
                     <p>SUSPENDISSE</p>
                     <p className='tracking'>.................</p>
                     <p>$29.79</p>
                  </div>
                  <div className='flex mb-9 items-center gap-6'>
                     <p>CONVALLIS AUGUE</p>
                     <p className='tracking'>..............</p>
                     <p>$19.35</p>
                  </div>
                  <div className='flex mb-9 items-center gap-6'>
                     <p>MAECENAS TRISTIQUE</p>
                     <p className='tracking'>............</p>
                     <p>$12.19</p>
                  </div>
                  <div className='flex mb-9 items-center gap-6'>
                     <p>CHICKEN KABAB</p>
                     <p className='tracking ml-2'>...............</p>
                     <p>$31.89</p>
                  </div>
                  <div className='flex mb-9 items-center gap-6'>
                     <p>MUTTON KURMA</p>
                     <p className='tracking ml-2'>...............</p>
                     <p>$61.01</p>
                  </div>
                  <div className='flex items-center gap-6'>
                     <p>INDIAN THALI</p>
                     <p className='tracking ml-2'>.................</p>
                     <p>$91.89</p>
                  </div>
                  </div>
          </div>
                  <div className='flex justify-around px-20 ml-5 items-center mt-20'>
                     <div className=''>
                  <h1 className='tracking-widest text-black mb-9 text-2xl font-semibold'>DRINKS</h1>
                  <div className='flex gap-6  mb-9 items-center'>
                     <p>VIVAMUS PRETIUM</p>
                     <p className='tracking'>................</p>
                     <p>$49.79</p>
                  </div>
                  <div className='flex  mb-9 items-center gap-6'>
                     <p>DUIS PHARETRA LIGULA</p>
                     <p className='tracking'>.............</p>
                     <p>$19.35</p>
                  </div>
                  <div className='flex mb-9 items-center gap-6'>
                     <p>IN EU DOLOR</p>
                     <p className='tracking'> ...................</p>
                     <p className='ml-1'>$25.80</p>
                  </div>
                  <div className='flex items-center gap-6'>
                     <p>VERGIN MOJITO</p>
                     <p className='tracking'>..................</p>
                     <p>$21.89</p>
                  </div>
                  </div>
                     <divv>
                  <h1 className='tracking-widest text-black mb-9 text-2xl font-semibold'>DESSERT</h1>
                  <div className='flex gap-6  mb-9 items-center'>
                     <p>PINE NUT SBRISALONA</p>
                     <p className='tracking'>...........</p>
                     <p>$29.79</p>
                  </div>
                  <div className='flex  mb-9 items-center gap-6'>
                     <p>AENEAN EU</p>
                     <p className='tracking'>..................</p>
                     <p>$19.35</p>
                  </div>
                  <div className='flex mb-9 items-center gap-6'>
                     <p>SED FEUGIATE</p>
                     <p className='tracking'> ................</p>
                     <p className='ml-1'>$25.80</p>
                  </div>
                  <div className='flex items-center gap-6'>
                     <p>CONSECTETUR</p>
                     <p className='tracking'>................</p>
                     <p>$21.89</p>
                  </div>
                  </divv>
                  </div>
                 <div className=' flex justify-center items-center menu-bg1  mt-16 h-[55vh] w-auto'>
                 <h1 className='text-5xl mt-6 text-white montserrat-font z-50 opacity-100 tracking-widest font-bold'>LUNCH</h1>
                 </div>
                 <div className='flex justify-between items-center h-[70vh] w-auto mt-12 px-48'>
                  <div className='flex flex-col gap-9'>
                    <div className='flex justify-center items-center'>
                      <div className='h-[15vh] w-[10vw] rounded-lg overflow-hidden'>
                      <div className=' Lunch-img rounded-lg hover:scale-110 duration-500 h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='ml-6 flex flex-col gap-2'>
                         <h1 className='text-sm cursor-pointer hover:text-red-600 duration-500  tracking-widest'>SED VARIUS</h1>
                         <p className='text-xs opacity-90'>Aenean pharetra tortor dui in pellentesque</p>
                         <p>$29.79</p>
                      </div>
                   </div>
                    <div className='flex justify-start items-center'>
                      <div className='h-[15vh] w-[10vw] overflow-hidden rounded-lg '>
                      <div className=' Lunch-img1 rounded-lg hover:scale-110 duration-500 h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='ml-6 flex flex-col gap-2'>
                         <h1 className='text-sm cursor-pointer hover:text-red-600 duration-500  tracking-widest'>TEMPUS ALIQUET</h1>
                         <p className='text-xs opacity-90'>Aenean condimentum ante erat</p>
                         <p>$45.09</p>
                      </div>
                   </div>
                    <div className='flex justify-center items-center'>
                      <div className='h-[15vh] w-[10vw] overflow-hidden rounded-lg'>
                      <div className=' Lunch-img2 rounded-lg hover:scale-110 duration-500 h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='ml-6 flex flex-col gap-2'>
                         <h1 className='text-sm cursor-pointer hover:text-red-600 duration-500  tracking-widest'>DUIS MASSA</h1>
                         <p className='text-xs opacity-90'>Proin lacinia nisl ut ultricies posuere nulla</p>
                         <p>$12.49</p>
                      </div>
                      </div>
                   </div>
                   <div className='flex flex-col gap-9'>
                    <div className='flex justify-center items-center'>
                      <div className='rounded-lg h-[15vh] w-[10vw] overflow-hidden'>
                      <div className=' Lunch-img3 hover:scale-110 duration-500 rounded-lg h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='ml-4 flex flex-col gap-2'>
                         <h1 className='text-sm cursor-pointer hover:text-red-600 duration-500  tracking-widest'>SBRISALONA</h1>
                         <p className='text-xs opacity-90'>Aenean pharetra tortor dui in pellentesque</p>
                         <p>$29.79</p>
                      </div>
                   </div>
                    <div className='flex justify-center items-center'>
                      <div className='rounded-lg h-[15vh] w-[10vw] overflow-hidden'>
                      <div className='Lunch-img4 hover:scale-110 duration-500 rounded-lg h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='flex flex-col gap-2 ml-6'>
                         <h1 className='text-sm cursor-pointer hover:text-red-600 duration-500  tracking-widest'>CRAS EGET MAGNA</h1>
                         <p className='text-xs opacity-90'>Aenean pharetra tortor dui in pellentesque</p>
                         <p>$29.79</p>
                      </div>
                   </div>
                    <div className='flex justify-center items-center'>
                      <div className='rounded-lg h-[15vh] w-[10vw] overflow-hidden'>
                      <div className='Lunch-img5 hover:scale-110 duration-500  rounded-lg h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='flex flex-col gap-2 ml-6'>
                         <h1 className='text-sm cursor-pointer hover:text-red-600 duration-500 tracking-widest'>NULLAM MAXIMUS</h1>
                         <p className='text-xs opacity-90'>Aenean pharetra tortor dui in pellentesque</p>
                         <p>$29.79</p>
                      </div>
                      </div>
                   </div>
                 </div>
                 <div className='h-[50vh] mt-10 flex justify-center items-center w-auto dinner-img'>
                 <h1 className='text-4xl mt-6 text-white montserrat-font z-50 opacity-100 tracking-widest font-bold'>DINNER</h1>
                 </div>
                 <div className='flex justify-between items-center h-[70vh] w-auto mt-12 px-48'>
                  <div className='flex flex-col gap-9'>
                    <div className='flex justify-center items-center'>
                      <div className='h-[15vh] w-[10vw] rounded-lg overflow-hidden'>
                      <div className=' Dinner-img rounded-lg hover:scale-110 duration-500 h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='ml-6 flex flex-col gap-2'>
                         <h1 className='text-lg cursor-pointer hover:text-red-600 duration-500  tracking-widest'>MAECENAS TRISTIQUE</h1>
                         <p className='text-xs opacity-90'>Aenean pharetra tortor dui in pellentesque</p>
                         <p>$29.79</p>
                      </div>
                   </div>
                    <div className='flex justify-start items-center'>
                      <div className='h-[15vh] w-[10vw] overflow-hidden rounded-lg '>
                      <div className=' Dinner-img1 rounded-lg hover:scale-110 duration-500 h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='ml-6 flex flex-col gap-2'>
                         <h1 className='text-lg cursor-pointer hover:text-red-600 duration-500  tracking-widest'>PINE NUT SBRISALONA</h1>
                         <p className='text-xs opacity-90'>Aenean condimentum ante erat</p>
                         <p>$45.09</p>
                      </div>
                   </div>
                    <div className='flex justify-center items-center'>
                      <div className='h-[15vh] w-[10vw] overflow-hidden rounded-lg'>
                      <div className=' Dinner-img2 rounded-lg hover:scale-110 duration-500 h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='ml-6 flex flex-col gap-2'>
                         <h1 className='text-lg cursor-pointer hover:text-red-600 duration-500  tracking-widest'>SUSPENDISSE EU</h1>
                         <p className='text-xs opacity-90'>Proin lacinia nisl ut ultricies posuere nulla</p>
                         <p>$12.49</p>
                      </div>
                      </div>
                   </div>
                   <div className='flex flex-col gap-9'>
                    <div className='flex justify-center items-center'>
                      <div className='rounded-lg h-[15vh] w-[10vw] overflow-hidden'>
                      <div className=' Dinner-img3 hover:scale-110 duration-500 rounded-lg h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='ml-4 flex flex-col gap-2'>
                         <h1 className='text-lg cursor-pointer hover:text-red-600 duration-500  tracking-widest'>CRAS MAXIMUS</h1>
                         <p className='text-xs opacity-90'>Aenean pharetra tortor dui in pellentesque</p>
                         <p>$29.79</p>
                      </div>
                   </div>
                    <div className='flex justify-center items-center'>
                      <div className='rounded-lg h-[15vh] w-[10vw] overflow-hidden'>
                      <div className='Dinner-img4 hover:scale-110 duration-500 rounded-lg h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='flex flex-col gap-2 ml-6'>
                         <h1 className='text-lg cursor-pointer hover:text-red-600 duration-500  tracking-widest'>PINE NUT SBRISALONA</h1>
                         <p className='text-xs opacity-90'>Aenean pharetra tortor dui in pellentesque</p>
                         <p>$29.79</p>
                      </div>
                   </div>
                    <div className='flex justify-center items-center'>
                      <div className='rounded-lg h-[15vh] w-[10vw] overflow-hidden'>
                      <div className='Dinner-img5 hover:scale-110 duration-500  rounded-lg h-[15vh] w-[10vw]'>
                         
                      </div>
                      </div>
                      <div className='flex flex-col gap-2 ml-6'>
                         <h1 className='text-lg cursor-pointer hover:text-red-600 duration-500 tracking-widest'>TEMPOR MALESUADA</h1>
                         <p className='text-xs opacity-90'>Aenean pharetra tortor dui in pellentesque</p>
                         <p>$29.79</p>
                      </div>
                      </div>
                   </div>
                 </div>
                 <div className='bg-gray-100 mt-9 flex justify-center items-center gap-10 montserrat-font  w-auto h-[25vh]'>
                <h1 className='text-2xl tracking-widest font-semibold '>SPECIALS SIGN UP</h1>
                <input type="text" className='pr-12 border outline-none border-[#d9d9d9] rounded-lg  pl-4 text-sm py-3' placeholder='Email Address' id="" /><IoMdMail className='inline-block absolute left-[900px]' />
                <button className='bg-black text-white px-8 py-3 rounded-lg text-sm'>SINGH - UP</button>
           </div>
    </div>
  )
}

export default page