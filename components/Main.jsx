import React from 'react'

const Main = () => {
  return (
    <>
<div className=' w-full h-[500px] my-10 flex gap-20 bg-blue-600 relative'>
<video
src='./src/assets/gift.mp4'
className='w-full h-full object-cover absolute'
autoPlay
muted
loop
playsInline/>

<div className='absolute inset-0 bg-black/30'></div>

<div className='relative flex flex-col justify-center'>
<div className='px-20 flex flex-col gap-5'>
    <h1 className='text-white text-4xl'>Celebrate the Sense of Giving</h1>
    <p className='text-white w-75'>Discover special festive deals and heartwarming gifts crafted just for the holidays. Give love, share joy! Enjoy the warmth of the holidays with soft lights, delicate décor, and exclusive festive collections.</p>
<div className='flex gap-4 items-center'>
    <button className='bg-white px-6 py-2 rounded-full cursor-pointer hover:scale-102 hover:bg-blue-400 hover:text-white'>Shop Now</button>
    <button className='border-2 border-white text-white px-6 py-2 rounded-full cursor-pointer hover:scale-102 hover:bg-blue-400 hover:text-white '>Explore More</button>
</div>
</div>
</div>

</div>


    </>
  )
}

export default Main