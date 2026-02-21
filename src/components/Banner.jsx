import React from 'react'
import indoorHouse from '../assets/indoor house.mp4'

const Banner = () => {
  return (
    <>
      <div className='w-full h-[400px] px-20 flex gap-20 bg-blue-600'>

        <div className='w-[60%] h-full rounded-2xl px-20 flex items-center'>
          <div>
            <h1 className='text-white text-4xl font-bold mb-2'>
              A Cozy Winter Wonderland Indoors
            </h1>

            <p className='text-white w-90'>
              Transform your home into a breathtaking Christmas oasis with stunning décor that lights up the entire room.
              Every detail brings the holiday spirit to life.
            </p>

            <div className='flex gap-4 items-center my-5'>
              <button className='bg-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-800 hover:text-white'>
                Buy Now
              </button>

              <button className='border-2 border-white text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-800'>
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className='w-[40%] h-full py-4'>
          <video
            src={indoorHouse}
            className='w-full h-full object-fill rounded-2xl shadow-lg border-2 border-white'
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

      </div>
    </>
  )
}

export default Banner