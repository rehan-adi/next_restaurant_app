import React from 'react'
import { IoMdMail } from "react-icons/io";

function page() {
  return (
    <div className=' h-[575vh] montserrat-font w-auto'>
         <div className='about-img flex justify-center items-center h-[75vh] w-auto'>
         <h1 className='text-5xl mt-6 text-white montserrat-font tracking-widest font-bold'>ABOUT US</h1>
         </div>
         <div className='w-auto h-[75vh] flex justify-center items-center flex-col'>
         <h2 className='courgette-font text-3xl text-center text-red-600'>Italian Restaurant</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>OUR STORY</h1>
               <p className=' text-center mt-10 font-semibold opacity-65'>Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et <br /> magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. <br /> Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class <br /> aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, <br /> egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.</p>
         </div>
         <div className='h-[80vh] flex justify-center items-center flex-col w-auto about-img-1'>
         <h2 className='courgette-font text-3xl text-center text-red-600'>Discover</h2>
               <h1 className='montserrat-font mt-4 text-white text-5xl tracking-widest text-center font-extrabold'>OUR VIDEO</h1>
         </div>
         <div className='h-[80vh] flex justify-center gap-36 items-center w-auto  '>
          <div className=''>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Delicious</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>RECIPES</h1>
               <p className=' text-center mt-10 font-semibold opacity-65'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed <br /> fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis <br /> ligula sem id neque.</p>
          </div>
          <div className='w-[25vw] rounded-xl h-[50vh] overflow-hidden'>
          <div className='w-[25vw] rounded-xl hover:scale-110 duration-500 h-[50vh]'>
             <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
          </div>
          </div>
        </div>
         <div className='h-[80vh] flex justify-center gap-36 items-center w-auto  '>
          <div className='w-[25vw] rounded-xl h-[50vh] overflow-hidden'>
         <div className='w-[25vw] rounded-xl hover:scale-110 duration-500 h-[50vh]'>
             <img src="https://preview.colorlib.com/theme/pato/images/our-story-02.jpg" alt="" />
          </div>
          </div>
          <div className=''>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Romantic</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>RESTAURANT</h1>
               <p className=' text-center mt-10 font-semibold opacity-65'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed <br /> fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis <br /> ligula sem id neque.</p>
          </div>
        </div>
        <div className='h-[75vh] w-auto about-img-2'>

        </div>
        <div className='h-[85vh] flex justify-center items-center flex-col w-auto'>
               <div className='mt-8'>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Meet Our</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>CHEF</h1>
               </div>
               <div className='flex justify-center gap-5 mt-12 items-center'>
                   <div className='h-[40vh] w-[25vw] flex  flex-col justify-center items-center rounded-lg border-2 border-[#d9d9d9] '>
                    <div className='h-24 w-24 overflow-hidden rounded-full'>
                       <div className='chef-img h-24 w-24 border-4 border-red-600 hover:scale-105 duration-500 rounded-full bg-purple-600'>

                       </div>
                       </div>
                          <h3 className='font-semibold text-xl'>Peter Hart</h3>
                          <h4 className='text-xs font-semibold mt-2'>CHEF</h4>
                          <p className='text-center opacity-70 mt-2'>Donec porta eleifend mauris ut effici- <br />tur. Quisque non velit vestibulum, lob- <br />ortis mi eget, rhoncus nunc</p>
                   </div>
                   <div className='h-[40vh] flex flex-col justify-center items-center w-[25vw] rounded-lg border-2 border-[#d9d9d9]'>
                   <div className='h-24 w-24 overflow-hidden rounded-full'>
                       <div className='chef-img1 h-24 w-24 border-4 border-red-600 hover:scale-105 duration-500 rounded-full bg-purple-600'>

                       </div>
                       </div>
                   <h3 className='font-semibold text-xl'>Joyce Bowman</h3>
                          <h4 className='text-xs font-semibold mt-2'>CHEF</h4>
                          <p className='text-center opacity-70 mt-2'>Donec porta eleifend mauris ut effici- <br />tur. Quisque non velit vestibulum, lob- <br />ortis mi eget, rhoncus nunc</p>
                   </div>
                   <div className='h-[40vh] w-[25vw] flex flex-col justify-center items-center rounded-lg border-2 border-[#d9d9d9]'>
                   <div className='h-24 w-24 overflow-hidden rounded-full'>
                       <div className='chef-img h-24 w-24 border-4 border-red-600 hover:scale-105 duration-500 rounded-full bg-purple-600'>

                       </div>
                       </div>
                           <h3 className='font-semibold text-xl'>Thoman Monro</h3>
                          <h4 className='text-xs font-semibold mt-2'>CHEF</h4>
                          <p className='text-center opacity-70 mt-2'>Donec porta eleifend mauris ut effici- <br />tur. Quisque non velit vestibulum, lob- <br />ortis mi eget, rhoncus nunc</p>
                   </div>
               </div>
        </div>
        <div className='bg-gray-100 flex justify-center items-center gap-10 montserrat-font w-auto h-[25vh]'>
                <h1 className='text-2xl tracking-widest font-semibold '>SPECIALS SIGN UP</h1>
                <input type="text" className='pr-12 border border-[#d9d9d9] rounded-lg  pl-4 text-sm py-3' placeholder='Email Address' id="" /><IoMdMail className='inline-block absolute left-[900px]' />
                <button className='bg-black text-white px-8 py-3 rounded-lg text-sm'>SINGH - UP</button>
           </div>
    </div>
  )
}

export default page