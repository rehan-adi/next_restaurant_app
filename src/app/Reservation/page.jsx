import React from 'react'

export const metadata = {
  title: "Reservation"
}

function page() {
  return (
    <div className='h-[195vh] w-auto'>
      <div className='h-[75vh] flex justify-center items-center w-auto resve-img'>
        <h1 className='text-5xl mt-6 text-white montserrat-font tracking-widest font-bold'>RESERAVATION</h1>
      </div>
      <div className='h-[120vh] w-auto flex justify-center bg-gray-100 items-center flex-col '>
        <h3 className='courgette-font text-center text-3xl text-red-600'>Reservation</h3>
        <h1 className='text-5xl mt-4 text-center montserrat-font text-black tracking-widest font-bold'>BOOK TABLE</h1>

        <form action="https://getform.io/f/27a37c55-c816-4e96-a915-bcc97fa17702" method="POST">
          <div className="mb-10 mt-12 gap-8 flex">
            <div>
              <label for="Date" className="block text-sm mb-2">Date</label>
              <input type="number" placeholder='Date' id="people" name="people" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 rounded-lg pr-12 py-3" />
            </div>
            <div>
              <label for="Time" className="block text-sm mb-2">Time</label>
              <input type="number" placeholder='Time' id="people" name="people" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 rounded-lg pr-12 py-3" />
            </div>
            <div>
              <label for="people" className="block text-sm mb-2">People</label>
              <input type="number" placeholder='People' id="people" name="people" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 rounded-lg pr-12 py-3" />
            </div>
          </div>

          <div className="mb-4 gap-8 flex">
            <div>
              <label for="name" className="block text-sm mb-2">Name</label>
              <input type="text" id="name" placeholder='Name' name="name" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 rounded-lg pr-12 py-3" />
            </div>
            <div>
              <label for="phone" className="block text-sm mb-2">Phone</label>
              <input type="text" placeholder='Phone' id="phone" name="phone" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 rounded-lg pr-12 py-3" />
            </div>
            <div>
              <label for="email" className="block text-sm  mb-2">Email</label>
              <input type="email" placeholder='Email' id="email" name="email" required
                className="border-2 outline-none border-[#d9d9d9] pl-5 rounded-lg pr-12 py-3" />
            </div>
          </div>

          <div className='text-center mt-14 text-white'>
            <button type='submit' className='bg-black px-8 py-3 text-xs montserrat-font rounded-xl'>BOOK TABLE</button>
          </div>
        </form>
        <div className='flex gap-60 mt-20 items-center px-40'>
          <div>
            <h1 className='text-xl tracking-widest font-semibold'>RESERVE BY PHONE</h1>
            <p className='mt-7 opacity-80'>Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl <br /> sed, tincidunt lectus. Nulla  vulputate , lectus vel volutpat efficitur, orci <br />  lacus sodales sem, sit amet quam: <span className='text-red-500'>(001) 345 6889</span></p>
          </div>
          <div>
            <h1 className='text-xl mb-8 mt-4 tracking-widest font-semibold'>FOR EVENT BOOKING</h1>
            <p className='mt-4 opacity-80 mb-10'>Donec feugiat ligula rhoncus: <span className='text-red-500'>(001) 345 6889</span> , varius nisl sed, tinci <br />-dunt lectus sodales sem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page


