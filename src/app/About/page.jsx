import React from 'react'
import { IoMdMail } from "react-icons/io";


export const metadata = {
  title : "About"
}


function page() {

  return (
    <div className=' h-[780vh] montserrat-font w-auto'>
         <div className='about-img flex justify-center items-center h-[75vh] w-auto'>
         <h1 className='text-3xl mt-6 text-white montserrat-font tracking-widest font-bold'>ABOUT US</h1>
         </div>
         <div className='w-auto h-[90vh] flex justify-center items-center flex-col'>
         <h2 className='courgette-font text-3xl text-center text-red-600'>Italian Restaurant</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>OUR STORY</h1>
               <p className=' text-center text-sm mt-10 font-semibold opacity-65'>Fusce at risus eget mi auctor pulvinar. <br /> Suspendisse maximus venenatis pretium. <br /> Orci varius natoque penatibus et  magnis dis <br /> parturient montes, nascetur ridiculus mus. <br /> Aliquam purus purus, lacinia a scelerisque in, <br /> luctus vel felis. Donec odio diam, dignissim a <br /> efficitur at, efficitur et est. Pellentesque <br /> semper est ut pulvinar ullamcorper. Class <br /> aptent taciti sociosqu ad litora torquent per <br /> conubia nostra, per inceptos himenaeos. <br /> Nulla et leo accumsan, egestas velit ac, <br /> fringilla tortor. Sed varius justo sed luctus <br /> mattis.</p>
         </div>
         <div className='h-[70vh] flex justify-center items-center flex-col w-auto about-img-1'>
         <h2 className='courgette-font text-3xl text-center text-red-600'>Discover</h2>
               <h1 className='montserrat-font mt-4 text-white text-5xl tracking-widest text-center font-extrabold'>OUR <br /> VIDEO</h1>
         </div>
         <div className='h-[120vh] flex flex-col mt-28 justify-center items-center w-auto  '>
          <div className='flex justify-center mt-5 items-center flex-col'>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Delicious</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>RECIPES</h1>
               <p className=' text-center mt-10 mb-5 text-sm font-semibold opacity-65'>Donec quis lorem nulla. Nunc eu odio mi .<br /> Morbi nec lobortis est. Sed  fringilla, nunc  sed <br /> imperdiet lacinia, nisl ante egestas mi, ac  <br /> facilisis ligula sem id neque.</p>
          </div>
          <div className='w-[90vw] rounded-xl mt-16 h-[80vh] overflow-hidden'>
          <div className='w-[90vw] rounded-xl hover:scale-110 duration-500 h-[80vh]'>
             <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
          </div>
          </div>
        </div>
         <div className='h-[95vh] mb-32 flex justify-center flex-col items-center w-auto  '>
          <div className='w-[90vw] rounded-xl h-[85vh] overflow-hidden'>
         <div className='w-[90vw] rounded-xl hover:scale-110 duration-500 h-[85vh]'>
             <img src="https://preview.colorlib.com/theme/pato/images/our-story-02.jpg" alt="" />
          </div>
          </div>
          <div className=''>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Romantic</h2>
               <h1 className='montserrat-font mt-4 text-4xl tracking-widest text-center font-extrabold'>RESTAURANT</h1>
               <p className=' text-center text-sm mt-10 font-semibold opacity-65'>Donec quis lorem nulla. Nunc eu odio mi .<br /> Morbi nec lobortis est. Sed  fringilla, nunc  sed <br /> imperdiet lacinia, nisl ante egestas mi, ac  <br /> facilisis ligula sem id neque.</p>
          </div>
        </div>
        <div className='h-[75vh] w-auto about-img-2'>

        </div>
        <div className='h-[170vh] flex justify-center items-center flex-col w-auto'>
               <div className='mt-8'>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Meet Our</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>CHEF</h1>
               </div>
               <div className='flex flex-col justify-center gap-7 mt-12 items-center'>
                   <div className='h-[40vh] w-[90vw] flex  flex-col justify-center items-center rounded-lg border-2 border-[#d9d9d9] '>
                    <div className='h-24 w-24 overflow-hidden rounded-full'>
                       <div className='chef-img h-24 w-24 border-4 border-red-600 hover:scale-105 duration-500 rounded-full bg-purple-600'>

                       </div>
                       </div>
                          <h3 className='font-semibold text-xl'>Peter Hart</h3>
                          <h4 className='text-xs font-semibold mt-2'>CHEF</h4>
                          <p className='text-center opacity-70 mt-2'>Donec porta eleifend mauris ut effici- <br />tur. Quisque non velit vestibulum, lob- <br />ortis mi eget, rhoncus nunc</p>
                   </div>
                   <div className='h-[40vh] flex flex-col justify-center items-center w-[90vw] rounded-lg border-2 border-[#d9d9d9]'>
                   <div className='h-24 w-24 overflow-hidden rounded-full'>
                       <div className='chef-img1 h-24 w-24 border-4 border-red-600 hover:scale-105 duration-500 rounded-full bg-purple-600'>

                       </div>
                       </div>
                   <h3 className='font-semibold text-xl'>Joyce Bowman</h3>
                          <h4 className='text-xs font-semibold mt-2'>CHEF</h4>
                          <p className='text-center opacity-70 mt-2'>Donec porta eleifend mauris ut effici- <br />tur. Quisque non velit vestibulum, lob- <br />ortis mi eget, rhoncus nunc</p>
                   </div>
                   <div className='h-[40vh] w-[90vw] flex flex-col justify-center items-center rounded-lg border-2 border-[#d9d9d9]'>
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
        <div className='bg-gray-100 flex flex-col justify-center items-center gap-10 montserrat-font w-auto h-[45vh] relative'>
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