import React from 'react'

export const metadata = {
  title: "Reservation"
}

function page() {
  return (
    <div className='h-[330vh] lg:h-[195vh] bg-gray-100 w-auto'>
      <div className='h-[75vh] flex justify-center items-center w-auto resve-img'>
        <h1 className='text-3xl mt-6 text-white lg:text-5xl montserrat-font tracking-widest font-bold'>RESERAVATION</h1>
      </div>
      <div className='h-[250vh] lg:h-[120vh] w-auto flex justify-center items-center flex-col '>
        <h3 className='courgette-font text-center text-2xl text-red-600'>Reservation</h3>
        <h1 className='text-5xl mt-4 text-center montserrat-font text-black tracking-widest font-bold'>BOOK TABLE</h1>

        <form action="https://getform.io/f/27a37c55-c816-4e96-a915-bcc97fa17702" method="POST">
          <div className="mb-10 mt-12 gap-8 flex justify-center items-center lg:flex-row flex-col">
            <div>
              <label for="Date" className="block text-sm mb-2">Date</label>
              <input type="number" placeholder='Date' id="people" name="people" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 lg:pr-12 rounded-lg pr-28 py-3" />
            </div>
            <div>
              <label for="Time" className="block text-sm mb-2">Time</label>
              <input type="number" placeholder='Time' id="people" name="people" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 rounded-lg lg:pr-12 pr-28 py-3" />
            </div>
            <div>
              <label for="people" className="block text-sm mb-2">People</label>
              <input type="number" placeholder='People' id="people" name="people" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 rounded-lg lg:pr-12 pr-28 py-3" />
            </div>
          </div>

          <div className="mb-4 gap-8 flex justify-center items-center lg:flex-row flex-col">
            <div>
              <label for="name" className="block text-sm mb-2">Name</label>
              <input type="text" id="name" placeholder='Name' name="name" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 lg:pr-12 rounded-lg pr-28 py-3" />
            </div>
            <div>
              <label for="phone" className="block text-sm mb-2">Phone</label>
              <input type="text" placeholder='Phone' id="phone" name="phone" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 lg:pr-12 rounded-lg pr-28 py-3" />
            </div>
            <div>
              <label for="email" className="block text-sm  mb-2">Email</label>
              <input type="email" placeholder='Email' id="email" name="email" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 lg:pr-12 rounded-lg pr-28 py-3" />
            </div>
          </div>

          <div className='text-center mt-14 text-white'>
            <button type='submit' className='bg-black px-8 py-3 text-xs montserrat-font rounded-xl'>BOOK TABLE</button>
          </div>
        </form>

        <div className='flex gap-10 mt-36 lg:w-auto lg:flex lg:gap-40 lg:flex-row lg:mt-24 lg:items-center lg:justify-center lg:px-10 flex-col items-center'>
          <div className='flex lg:h-[25vh] lg:w-[33vw] lg:justify-center justify-center lg:items-start items-center flex-col'>
            <h1 className='text-xl tracking-widest font-semibold'>RESERVE BY PHONE</h1>
           <div className=' h-[30vh] lg:h-[40vh] lg:w-[68vh] w-[90vw] lg:px-0 px-3'>
           <p className='mt-7 opacity-80'>Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla  vulputate , lectus vel volutpat efficitur, orci lacus sodales sem, sit amet quam: <span className='text-red-500'>(001) 345 6889</span></p>
           </div>
          </div>
          <div className='flex flex-col justify-center lg:items-start items-center'>
            <h1 className='text-xl mb-5 mt-4 lg:mt-1 tracking-widest font-semibold'>FOR EVENT BOOKING</h1>
            <div className=' h-[15vh] lg:h-[20vh] lg:w-[32vw] px-3 lg:px-0 w-[90vw]'>
            <p className='mt-4 lg:mt-2 lg:text-start  opacity-80 mb-10'>Donec feugiat ligula rhoncusvarius nisl sed, tinci -dunt lectus sodales sem. Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='text-red-500'>(001) 345 6889</span> , 
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page


