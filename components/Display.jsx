import React from 'react'

const Display = () => {
  return (
  <>
  <div className='w-full h-[400px] my-15 px-20 flex gap-20 bg-blue-800'>
    <div className='w-[40%] h-full py-4'>
        <video src="./src/assets/chirstmasstree3.mp4"
        className='w-full h-full object-fill rounded-2xl shadow-lg border-2 border-white'
        autoPlay
        muted
        loop
        playsInline
        />
    </div>
<div className='w-[60%] h-full rounded-2xl'px-20 flex items-center>
    <div className='flex flex-col gap-5'>
        <h1 className='text-white text-4xl font-bold'>The Enchanted Christmas Tree</h1>
     <p className='text-white w-90'>Transform your home into a magical winter wonderland with our enchanted Christmas tree. Crafted with dense, lifelike branches and a deep evergreen finish, this tree brings festive warmth to every corner. Whether you decorate it with classic ornaments or modern lights, it becomes the centerpiece of holiday joy, family gatherings, and unforgettable memories.</p>
     <div className='flex-gap-4 items-center my-5'>
        <button className='bg-white px-6 py-2 rounded-full cursor-pointer hover:scale-102 hover:bg-blue-600 hover:text-white'>Buy Now</button>
           <button className=' ml-1.5 border-2 border-white text-white px-6 py-2 rounded-full cursor-pointer hover:scale-102 hover:bg-blue-600'>View Details</button>

     </div>
    </div>
</div>

  </div>
  
  
  </>
  )
}

export default Display