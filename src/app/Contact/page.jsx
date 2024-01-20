import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { LuClock10 } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";

export const metadata = {
  title : "Contact"
}


function page() {
  return (
    <div className='h-[260vh] montserrat-font w-auto'>
         <div className='h-[75vh]  flex justify-center items-center w-auto contact-img'>
         <h1 className='text-5xl mt-6 text-white montserrat-font tracking-widest font-bold'>CONTACT</h1>
         </div>
         <div className='flex  justify-center items-center mt-20'>
         <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12370371.792462902!2d2.124175805707276!3d40.80356989527924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sin!4v1705746424441!5m2!1sen!2sin"
          width="1200px"
          height="400px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
         </div>
         <div className='flex justify-center h-[120vh] bg-gray-100 flex-col  items-center'>
              <div>
                   <h1 className='text-xl tracking-widest font-semibold'>SEND US A MESSAGE</h1>
              </div>
              <div className='flex mt-16 gap-10 justify-center items-center'>
                    <div>
                    <p className='text-sm mb-2 opacity-70'>Name</p>
                      <input type="text" className='py-3 pr-10 outline-none pl-3 border-2 border-[#d9d9d9] rounded-lg' placeholder='Name' />
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
                  <div className='mt-10'>
                  <p className='text-sm mb-2  opacity-70'>Message</p>
                    <textarea  className='border-2 p-3 outline-none rounded-lg border-[#d9d9d9] ' placeholder='Message' name="" id="" cols="90" rows="8"></textarea>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                  <button className='bg-black text-white px-8 py-3 text-xs montserrat-font rounded-xl'>SUBMIT</button>
                  </div>
                  <div className='flex items-center gap-60 mt-32 mb-8'>
                      <div>
                         <h1 className='text-xl font-semibold tracking-widest'><IoLocationSharp className='inline-block mb-1 mr-3'/>LOCATION</h1>
                         <p className='mt-4 ml-8 text-sm'>8th floor, 379 Hudson St, <br /> New York, NY 10018</p>
                      </div>
                      <div>
                         <h1 className='text-xl  mb-4 font-semibold tracking-widest'><IoMdCall className='inline-block mb-1 mr-3'/>CALL US</h1>
                         <p className='text-sm ml-8'>+123-456-7890</p>
                         <p className='text-sm mt-1 ml-8'>+9329003456</p>
                      </div>
                      <div>
                         <h1 className='text-xl font-semibold tracking-widest'><LuClock10 className='inline-block mb-1 mr-3'/>OPENING HOURS</h1>
                         <p className='mt-4 text-sm ml-8 '>09:30 AM – 11:00 PM <br /> Every Day</p>
                      </div>
                  </div>
         </div>
    </div>
  )
}

export default page