import React from 'react'

function page() {
  return (
    <div className=' h-[430vh] w-auto'>
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
         <div className='h-[90vh] flex justify-center gap-36 items-center w-auto  '>
          <div className=''>
               <h2 className='courgette-font text-3xl text-center text-red-600'>Delicious</h2>
               <h1 className='montserrat-font mt-4 text-5xl tracking-widest text-center font-extrabold'>RECIPES</h1>
               <p className=' text-center mt-10 font-semibold opacity-65'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed <br /> fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis <br /> ligula sem id neque.</p>
          </div>
          <div className='w-[25vw] rounded-xl h-[50vh]'>
             <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
          </div>
        </div>
         <div className='h-[90vh] flex justify-center gap-36 items-center w-auto  '>
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
    </div>
  )
}

export default page