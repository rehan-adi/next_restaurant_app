import React from 'react'
import { IoMdMail } from "react-icons/io";


export const metadata = {
  title : "About"
}


function page() {

  return (
    <div className=' h-[775vh] lg:h-[565vh] montserrat-font w-auto'>
         <div className='about-img flex justify-center items-center h-[75vh] w-auto'>
         <h1 className='text-3xl lg:text-5xl mt-6 text-white montserrat-font tracking-widest font-bold'>ABOUT US</h1>
         </div>
         <div className='w-auto h-[90vh] lg:h-[65vh] flex  lg:pt-28 justify-center items-center flex-col'>
         <h2 className='courgette-font text-3xl text-center text-red-600'>Italian Restaurant</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>OUR STORY</h1>
               <div className='lg:h-[40vh] lg:w-[55vw]'>
               <p className='lawra text-center text-sm mt-10 px-4 font-semibold opacity-65'>Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et  magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.</p>
               </div>
         </div>
         <div className='h-[70vh] flex justify-center items-center flex-col w-auto about-img-1'>
         <h2 className='courgette-font text-3xl text-center text-red-600'>Discover</h2>
               <h1 className='montserrat-font mt-4 text-white lg:text-5xl text-4xl tracking-widest text-center font-extrabold'>OUR VIDEO</h1>
         </div>
         <div className='h-[120vh] lg:h-[75vh] flex flex-col lg:gap-44 lg:mt-0 lg:flex-row mt-28 justify-center items-center w-auto  '>
          <div className='flex justify-center mt-5 lg:mt-28 items-center flex-col'>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Delicious</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>RECIPES</h1>
               <div className='lg:h-[30vh] lg:w-[70vh]'>
               <p className=' text-center lawra mt-10 mb-5 text-sm px-6 font-semibold lg:opacity-50 opacity-50'>Donec quis lorem nulla. Nunc eu odio mi  Morbi nec lobortis est. Sed  fringilla, nunc  sed imperdiet lacinia, nisl ante egestas mi, ac  facilisis ligula sem id neque.</p>
               </div>
          </div>
          <div className='w-[90vw] rounded-xl lg:w-[25vw]  lg:h-[50vh] mt-16 h-[80vh] overflow-hidden'>
          <div className='w-[90vw] lg:w-[25vw] lg:h-[55vh]  rounded-xl hover:scale-110 duration-500 h-[80vh]'>
             <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
          </div>
          </div>
        </div>
         <div className='h-[95vh] lg:h-[75vh] mb-32 lg:mb-0 flex justify-center lg:gap-44 lg:flex-row flex-col items-center w-auto  '>
          <div className='w-[90vw] lg:w-[25vw] lg:h-[50vh] rounded-xl h-[85vh] overflow-hidden'>
         <div className='w-[90vw] lg:w-[25vw] lg:h-[55vh]  rounded-xl hover:scale-110 duration-500 h-[85vh]'>
             <img src="https://preview.colorlib.com/theme/pato/images/our-story-02.jpg" alt="" />
          </div>
          </div>
          <div className='lg:flex lg:justify-center mt-20 lg:items-center lg:mt-20 lg:flex-col'>
               <h2 className='courgette-font text-3xl  text-center text-red-600'>Romantic</h2>
               <h1 className='montserrat-font mt-4 text-4xl lg:text-5xl tracking-widest text-center font-extrabold'>RESTAURANT</h1>
               <div className='lg:h-[30vh] lg:w-[70vh]'>
               <p className='text-center lawra mt-10 mb-5 text-sm px-5 font-semibold lg:opacity-50 opacity-50'>Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.</p>
               </div>
          </div>
        </div>
        <div className='h-[75vh] w-auto about-img-2'>

        </div>
        <div className='h-[170vh] lg:h-[100vh] flex justify-center items-center flex-col w-auto'>
               <div className='mt-8'>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Meet Our</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>CHEF</h1>
               </div>
               <div className='flex flex-col justify-center lg:flex-row gap-7 mt-12 items-center'>
                   <div className='h-[40vh] w-[90vw] flex lg:w-[23vw] lg:h-[48vh] lg:text-sm  flex-col justify-center items-center rounded-lg border-2 border-[#d9d9d9] '>
                    <div className='h-24 w-24 overflow-hidden rounded-full'>
                       <div className='chef-img h-24 w-24 border-4 border-red-600 hover:scale-105 duration-500 rounded-full bg-purple-600'>

                       </div>
                       </div>
                          <h3 className='font-semibold lg:mt-3 text-xl'>Peter Hart</h3>
                          <h4 className='text-xs font-semibold lg:mb-5 mt-2'>CHEF</h4>
                          <p className='text-center opacity-70 mt-2'>Donec porta eleifend mauris ut effici- <br />tur. Quisque non velit vestibulum, lob- <br />ortis mi eget, rhoncus nunc</p>
                   </div>
                   <div className='h-[40vh] flex flex-col lg:w-[23vw] lg:h-[48vh] lg:text-sm justify-center items-center w-[90vw] rounded-lg border-2 border-[#d9d9d9]'>
                   <div className='h-24 w-24 overflow-hidden rounded-full'>
                       <div className='chef-img1 h-24 w-24 border-4 border-red-600 hover:scale-105 duration-500 rounded-full bg-purple-600'>

                       </div>
                       </div>
                   <h3 className='font-semibold lg:mt-3 text-xl'>Joyce Bowman</h3>
                          <h4 className='text-xs font-semibold mt-2 lg:mb-5'>CHEF</h4>
                          <p className='text-center opacity-70 mt-2'>Donec porta eleifend mauris ut effici- <br />tur. Quisque non velit vestibulum, lob- <br />ortis mi eget, rhoncus nunc</p>
                   </div>
                   <div className='h-[40vh] lg:w-[23vw] lg:h-[48vh] lg:text-sm  w-[90vw] flex flex-col justify-center items-center rounded-lg border-2 border-[#d9d9d9]'>
                   <div className='h-24 w-24 overflow-hidden rounded-full'>
                       <div className='chef-img h-24 w-24 border-4 border-red-600 hover:scale-105 duration-500 rounded-full bg-purple-600'>

                       </div>
                       </div>
                           <h3 className='font-semibold lg:mt-3 text-xl'>Thoman Monro</h3>
                          <h4 className='text-xs font-semibold lg:mb-5 mt-2'>CHEF</h4>
                          <p className='text-center opacity-70 mt-2'>Donec porta eleifend mauris ut effici- <br />tur. Quisque non velit vestibulum, lob- <br />ortis mi eget, rhoncus nunc</p>
                   </div>
               </div>
        </div>
        <div className='bg-gray-100 flex lg:h-[30vh] lg:flex-row flex-col justify-center items-center lg:gap-16 gap-10 montserrat-font w-auto h-[45vh] relative'>
    <h1 className='text-xl tracking-widest font-semibold '>SPECIALS SIGN UP</h1>
    <div className='relative'>
        <input type="text" className='pr-16 border outline-none border-[#d9d9d9] rounded-lg pl-4 text-sm py-3' placeholder='Email Address' id="" />
        <IoMdMail className='absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500' />
    </div>
    <button className='bg-black text-white px-8 py-3 rounded-lg text-sm'>SIGN UP</button>
</div>

    </div>
  )
}

export default page