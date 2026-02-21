import React from 'react'
import Santa from './Santa'

const Hero = () => {
  return (
    <>
     <div className='w-full h-182 relative'>
       
        <video src="./src/assets/clip santa.mp4"
        className='w-full h-full object-cover absolute'
        autoPlay
        muted
        loop
        playsInline
        />
        
        <div className='relative h-screen flex flex-col justify-center'>

         <div className='py-30 px-20 flex flex-col gap-5'>
            <h1 className='text-black text-6xl font-bold font-[var(--fonty)]'>Celebrate the Festival of Giving</h1>
            <p className='text-black w-75'>Discover the special festival deals and heatwarming gifts crafted just for the holidays.
                Give love , share joy! Enjoy the warmth of the holidays with soft lights , delicate decor, and exclusive festive collections.</p>
                <img src="./src/assets/cap.png" alt="cap" className='z-20 w-15 h-11  object-fill -translate-x-5.5 -rotate-19' />
            <div className='flex-gap-4 items-center -my-10'>
                <button className='mt-0 bg-white px-6 py-2 rounded-full cursor-pointer hover:scale-102 hover:bg-amber-300 hover:text-white'>Shop Now</button>
                  <button className='ml-2 border-2 border-white text-white px-6 py-2 rounded-full cursor-pointer hover:scale-102 hover:bg-amber-300 hover:text-white hover:border-amber-300'>Explore More</button>
            </div>
         </div>
        </div>
     </div>
     
    </>
    
  )
}

export default Hero