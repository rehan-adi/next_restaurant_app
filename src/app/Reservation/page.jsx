import React from 'react'

export const metadata = {
  title : "Reservation"
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
              <div className='flex gap-10 flex-col'>
                  <div className='flex gap-10 mt-12 justify-center items-center'>
                    <div>
                    <p className='text-sm mb-2 opacity-70'>Date</p>
                      <input type="text" className='py-3 outline-none pr-10 pl-3 border-2 border-[#d9d9d9] rounded-lg' placeholder='Date' />
                      </div>
                      <div>
                        <p className='text-sm mb-2 opacity-70'>Time</p>
                      <input type="text" className='py-3 outline-none pr-10 pl-3 border-2 border-[#d9d9d9] rounded-lg' placeholder='Time' />
                      </div>
                      <div>
                      <p className='text-sm mb-2 opacity-70'>People</p>
                      <input type="number" className='py-3 pr-10 outline-none pl-3 border-2 border-[#d9d9d9] rounded-lg' placeholder='People' />
                      </div>
                  </div>
                  <div className='flex  gap-10 justify-center items-center'>
                    <div>
                    <p className='text-sm mb-2 opacity-70'>Name</p>
                      <input type="text" className='py-3 outline-none pr-10 pl-3 border-2 border-[#d9d9d9] rounded-lg' placeholder='Name' />
                    </div>
                     <div>
                     <p className='text-sm mb-2 opacity-70'>Phone</p>
                      <input type="text" className='py-3 outline-none pr-10 pl-3 border-2 border-[#d9d9d9] rounded-lg' placeholder='Phone' />
                     </div>
                    <div>
                    <p className='text-sm mb-2 opacity-70'>Email</p>
                      <input type="text" className='py-3 outline-none pr-10 pl-3 border-2 border-[#d9d9d9] rounded-lg' placeholder='Email' />
                    </div>
                  </div>
                  <div className='flex justify-center items-center mt-4'>
                  <button className='bg-black text-white px-8 py-3 text-xs montserrat-font rounded-xl'>BOOK TABLE</button>
                  </div>
              </div>
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