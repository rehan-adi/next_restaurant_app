import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function page() {
  return (
    <main className='h-[666vh]  text-black w-auto '>
        <div className='img-1 text-white flex justify-center items-center flex-col w-full h-[100vh]'>
             <h2 className='text-6xl courgette-font font-medium'>Welcome to </h2>
             <h1 className='text-8xl mt-6 montserrat-font tracking-widest font-bold'>PATO PLACE</h1>
             <button className='px-7 py-3 mt-12 text-xs montserrat-font uppercase bg-white text-red-600 hover:bg-red-600 duration-500 hover:text-white rounded-xl'>Look Menu</button>
        </div>
        <div className='h-[80vh] flex justify-center gap-36 items-center w-auto bg-white '>
          <div className=''>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Italian Restaurant</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>WELCOME</h1>
               <p className=' text-center mt-10 font-semibold opacity-65'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed <br /> fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis <br /> ligula sem id neque.</p>
               <p className='hover:text-red-500 mt-6 text-sm opacity-65 text-center duration-500'>OUR STORY <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </p>
          </div>
          <div className='w-[25vw] rounded-xl h-[50vh]'>
             <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
          </div>
        </div>
        <div className='h-[60vh] flex justify-center items-center flex-col w-auto bg-img1'>
            <h3 className='courgette-font text-3xl text-red-600'>Discover</h3>
            <h1 className='text-5xl mt-6 montserrat-font text-white tracking-widest font-bold'>PATO PLACE</h1>
        </div>
        <div className='h-[80vh] flex items-center gap-6 justify-center w-auto bg-white'>
             <div className='w-[25vw] flex justify-center rounded-lg overflow-hidden flex-col items-start h-[56vh]  '>
                  <div className='w-[25vw] duration-700 rounded-lg bg-img2 h-[30vh] overflow-hidden transition-transform  hover:scale-110 '>
                      
                  </div>
                  <h1 className='montserrat-font text-xl mt-6 tracking-widest font-semibold '>ROMANTICE RESTRUANT</h1>
                  <p className='mt-5'>Phasellus lorem enim, luctus ut velit eget, con- <br />vallis egestas eros.</p>
                  <a href='' className='py-2 mt-4 hover:text-red-600 text-xs montserrat-font text-black uppercase bg-white rounded-xl'>LEARN MORE <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </a>
                  </div>
                  <div className=' flex justify-center overflow-hidden rounded-lg flex-col items-start w-[25vw] h-[56vh] '>
                  <div className='w-[25vw] overflow-hidden duration-700 transition-transform hover:scale-110 rounded-lg bg-img3 h-[30vh] '>
                 
                  </div>
                  <h1 className='montserrat-font text-xl mt-6 tracking-widest font-semibold '>DELICIOUS FOOD</h1>
                  <p className='mt-5'>Aliquam eget aliquam magna, quis posuere risus <br /> ac justo ipsum nibh urna</p>
                  <a href='' className=' py-2 mt-4 text-xs hover:text-red-600 montserrat-font text-black  uppercase bg-white rounded-xl'>LEARN MORE <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /></a>
                  </div>
                  <div className='flex justify-center flex-col overflow-hidden rounded-lg items-start w-[25vw] h-[56vh] '>
                  <div className='w-[25vw] overflow-hidden transition-transform duration-700 hover:scale-110 rounded-lg  bg-img4 h-[30vh] '>
                
                  </div>
                  <h1 className='montserrat-font text-xl mt-6 tracking-widest font-semibold '>RED WINES YOU LOVE</h1>
                  <p className='mt-5'>Sed ornare ligula eget tortor tempor, quis porta <br /> tellus dictum.</p>
                  <a href='' className='py-2 mt-4 hover:text-red-600 text-xs montserrat-font text-black  uppercase bg-white rounded-xl'>LEARN MORE <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /></a>
                  </div>
        </div>
        <div className='h-[150vh] w-auto bg-white'>
                  <div className='flex flex-col justify-center items-center pt-8'>
                  <h3 className='courgette-font text-3xl text-red-600'>Discover</h3>
                      <h1 className='text-5xl mt-6 montserrat-font text-black tracking-widest font-bold'>PATO PLACE</h1>
                  </div>
                  <div className='flex justify-center ml-8 items-center mt-16 gap-6'>
                    <div className='h-[66vh] w-[54vh] rounded-lg overflow-hidden '>
                      <div className='h-[66vh] flex justify-center items-center rounded-lg overflow-hidden duration-500 hover:scale-110 w-[52vh] fish-img'>
                            <h1 className='px-8 py-3 bg-white text-2xl opacity-85 duration-700 hover:bg-red-600 hover:text-white text-black tracking-widest font-normal rounded-lg'>LUNCH</h1> 
                      </div>
                      </div>
                      <div className='h-[66vh] w-[54vh] rounded-lg overflow-hidden '>
                      <div className='h-[66vh] flex justify-center items-center rounded-lg overflow-hidden duration-500 hover:scale-110 w-[53vh] wine-img'>
                      <h1 className='px-8 py-3 bg-white text-2xl opacity-85 duration-700 hover:bg-red-600 hover:text-white text-black tracking-widest font-normal rounded-lg'>DINNER</h1> 
                      </div>
                      </div>
                      <div className='flex flex-col gap-7'>
                        <div className='h-[31vh] overflow-hidden rounded-lg w-[55vh]'>
                      <div className='h-[31vh] flex justify-center items-center hover:scale-110 duration-500  rounded-lg w-[50vh] drink-img'>
                      <h1 className='px-8 py-3 bg-white text-2xl opacity-85 duration-700 hover:bg-red-600 hover:text-white text-black tracking-widest font-normal rounded-lg'>DRINK</h1> 
                           </div>
                           </div>
                        <div className='h-[31vh] overflow-hidden rounded-lg w-[55vh] '>
                           <div className='h-[31vh] flex justify-center items-center hover:scale-110 duration-500 rounded-lg w-[50vh] stater-img'>
                           <h1 className='px-8 py-3 bg-white text-2xl opacity-85 duration-700 hover:bg-red-600 hover:text-white text-black tracking-widest font-normal rounded-lg'>STARTERS</h1> 
                           </div>
                           </div>
                           </div>
                  </div>  
                  <div className='flex justify-center ml-8 items-center mt-16 gap-7'>
                    <divv className='h-[31vh] w-[111vh] rounded-lg overflow-hidden '>
                      <div className='h-[31vh] flex justify-center items-center rounded-lg overflow-hidden duration-500 hover:scale-110 w-[111vh] happy-img'>
                            <h1 className='px-8 py-3 bg-white text-2xl opacity-85 duration-700 hover:bg-red-600 hover:text-white text-black tracking-widest font-normal rounded-lg'>HAPPY HOUR</h1> 
                      </div>
                      </divv>
                      <div className='flex flex-col gap-7'>
                        <div className='h-[31vh] overflow-hidden rounded-lg w-[55vh] '>
                           <div className='h-[31vh] flex justify-center items-center hover:scale-110 duration-500 rounded-lg w-[50vh] dessert-img'>
                           <h1 className='px-8 py-3 bg-white text-2xl opacity-85 duration-700 hover:bg-red-600 hover:text-white text-black tracking-widest font-normal rounded-lg'>DESSERT</h1> 
                           </div>
                           </div>
                           </div>
                  </div>
        </div>
        <div className='w-auto flex justify-center gap-52 items-center h-[75vh] bg-gray-100'>
                <div>
                <h3 className='courgette-font text-center text-3xl text-red-600'>Reservation</h3>
                <h1 className='text-5xl mt-4 text-center montserrat-font text-black tracking-widest font-bold'>BOOK TABLE</h1>
                 <div className='flex mt-10 gap-8'>
                 <div>
                 <p className='text-sm mb-2 opacity-70'>Name</p>
                    <input type="text" className='bg-white border pl-5 border-[#d9d9d9] rounded-lg pr-12 py-3' name="" id="" placeholder='Name' />
                 </div>
                    <div>
                    <p className='text-sm mb-2 opacity-70'>Phone</p>
                    <input className='bg-white border border-[#d9d9d9] pl-5 rounded-lg pr-12 py-3' type="text" name="" id="" placeholder='Phone' />
                    </div>
                 </div>
                 <div className='flex gap-8 mt-6'>
                   <div>
                   <p className='text-sm mb-2 opacity-70'>People</p>
                    <input type="number" name="" className='bg-white border border-[#d9d9d9] pl-5 rounded-lg pr-12 py-3' id="" placeholder='Time' />
                   </div>
                   <div>
                    <p className='text-sm mb-2 opacity-70'>Email</p>
                   <input type="text" name="" id="" className='bg-white border border-[#d9d9d9] pl-5 rounded-lg pr-12 py-3' placeholder='Email' />
                   </div>
                 </div>
                 <div className='text-center mt-8 text-white'>
                   <button className='bg-black px-8 py-3 text-xs montserrat-font rounded-xl'>BOOK TABLE</button>
                   </div>
                </div>
                <div className='w-[25vw] h-[52vh] rounded-lg overflow-hidden'>
                <div className='w-[25vw]  rounded-lg  hover:scale-110 duration-500 img-date h-[52vh]'>
                
                </div>
                </div>
        </div>

        <div className='h-[95vh] w-auto '>
               <div>
               <h3 className='courgette-font text-center mt-10 text-3xl text-red-600'>Latest News</h3>
                <h1 className='text-5xl mt-4 text-center montserrat-font text-black tracking-widest font-bold'>THE BLOG</h1>
               </div>
               <div className='h-[80vh] flex items-center gap-6 justify-center w-auto bg-white'>
             <div className='w-[25vw] flex justify-center rounded-lg overflow-hidden flex-col items-start h-[56vh]  '>
                  <div className='w-[25vw] duration-700 rounded-lg blog-img h-[30vh] overflow-hidden transition-transform  hover:scale-110 '>
                      
                  </div>
                  <h1 className='montserrat-font text-xl mt-6 tracking-widest font-semibold '>BEST PLACE FOR DATE</h1>
                  <p className='mt-5'>Phasellus lorem enim, luctus ut velit eget, con- <br />vallis egestas eros.</p>
                  <a href='' className='py-2 mt-4 hover:text-red-600 text-xs montserrat-font text-black uppercase bg-white rounded-xl'>CONTINUE READING <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /> </a>
                  </div>
                  <div className=' flex justify-center overflow-hidden rounded-lg flex-col items-start w-[25vw] h-[56vh] '>
                  <div className='w-[25vw] overflow-hidden duration-700 transition-transform hover:scale-110 rounded-lg blog-img1 h-[30vh] '>
                 
                  </div>
                  <h1 className='montserrat-font text-xl mt-6 tracking-widest font-semibold '>EGGS AND CHEESE</h1>
                  <p className='mt-5'>Aliquam eget aliquam magna, quis posuere risus <br /> ac justo ipsum nibh urna</p>
                  <a href='' className=' py-2 mt-4 text-xs hover:text-red-600 montserrat-font text-black  uppercase bg-white rounded-xl'>CONTINUE READING <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /></a>
                  </div>
                  <div className='flex justify-center flex-col overflow-hidden rounded-lg items-start w-[25vw] h-[56vh] '>
                  <div className='w-[25vw] overflow-hidden transition-transform duration-700 hover:scale-110 rounded-lg  blog-img2 h-[30vh] '>
                
                  </div>
                  <h1 className='montserrat-font text-xl mt-6 tracking-widest font-semibold '>STYLE THE WEDDING PARTY</h1>
                  <p className='mt-5'>Sed ornare ligula eget tortor tempor, quis porta <br /> tellus dictum.</p>
                  <a href='' className='py-2 mt-4 hover:text-red-600 text-xs montserrat-font text-black  uppercase bg-white rounded-xl'>CONTINUE READING  <IoIosArrowRoundForward className='inline-block mb-1 font-semibold text-2xl' /></a>
                  </div>
        </div>
        </div>
    </main>
  )
}

export default page