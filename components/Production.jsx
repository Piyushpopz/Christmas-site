import React from 'react'

const Production = () => {
  return (
  <>
  <div className='w-full h-[460px] bg-[white] scroll-m-0  overflow-x-hidden'>
    <div className='w-full h-full overflow-x-auto flex gap-10 p-10 no-scrollbar'>
        <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl'>
                <img src="./src/assets/socks.jpg" alt="1st-product" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
                <img src="./src/assets/bow.png" alt="bow" className='w-[80px] h-[80px] object-cover -translate-y-60 -translate-x-5 -rotate-20'/>
            </div>
            <div className='w-full h-[30%] px-5 py-1 flex flex-col items-center gap-2'>
                <h1 className='text-white font-medium text-xl'>Christmas Socks</h1>
                <p className='text-white/80 text-sm'>Soft, warm, and festive! These Christmas socks add the perfect holiday charm to every step. Soft and Warm Feets</p>
                 <button className=' px-8 py-1.5 mb-2.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>Buy</button>
            </div>
        </div>
        <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl'>
                <img src="./src/assets/cookies.jpg" alt="2nd-product" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
                <img src="./src/assets/bow.png" alt="bow" className='w-[80px] h-[80px] object-cover -translate-y-60 -translate-x-5 -rotate-20'/>
            </div>
            <div className='w-full h-[30%] px-5 py-1 flex flex-col items-center gap-2'>
                <h1 className='text-white font-medium text-xl'>Cookies</h1>
                <p className='text-white/80 text-sm'>Freshly baked and full of flavor! These delicious cookies are the perfect sweet treat to share with loved ones.</p>
                 <button className=' px-8 py-1.5 mb-2.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>Buy</button>
            </div>
        </div>
          <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl'>
                <img src="./src/assets/marshmallows.jpg" alt="3rd-product" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
                <img src="./src/assets/bow.png" alt="bow" className='w-[80px] h-[80px] object-cover -translate-y-60 -translate-x-5 -rotate-20'/>
            </div>
            <div className='w-full h-[30%] px-5 py-1 flex flex-col items-center gap-2'>
                <h1 className='text-white font-medium text-xl'>Marshmallows</h1>
                <p className='text-white/80 text-sm'>Soft, fluffy, and sweet! These marshmallows add a cloud of comfort to your favorite chewy winter treats.</p>
                 <button className=' px-8 py-1.5 mb-2.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>Buy</button>
            </div>
        </div>
         <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl'>
                <img src="./src/assets/christmas legos.jpg" alt="4th-product" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
                <img src="./src/assets/bow.png" alt="bow" className='w-[80px] h-[80px] object-cover -translate-y-60 -translate-x-5 -rotate-20'/>
            </div>
            <div className='w-full h-[30%] px-5 py-1 flex flex-col items-center gap-2'>
                <h1 className='text-white font-medium text-xl'>Christmas Legos</h1>
                <p className='text-white/80 text-sm'>Build your own holiday magic! These Christmas Legos offer lets you piece together your very own winter village.</p>
                 <button className=' px-8 py-1.5 mb-2.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>Buy</button>
            </div>
            </div>
       <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl'>
                <img src="./src/assets/hotchoclates.jpg" alt="5th-product" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
                <img src="./src/assets/bow.png" alt="bow" className='w-[80px] h-[80px] object-cover -translate-y-60 -translate-x-5 -rotate-20'/>
            </div>
            <div className='w-full h-[30%] px-5 py-1 flex flex-col items-center gap-2'>
                <h1 className='text-white font-medium text-xl'>Hot Chocolate</h1>
                <p className='text-white/80 text-sm'>Rich, creamy, and warming! This hot chocolate is the ultimate way to stay cozy these Holidays.while watching the snow fall outside your window.</p>
                 <button className=' px-8 py-1.5 mb-2.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>Buy</button>
            </div>
            </div>
       
        



    </div>
  </div>
  </>
  )
}

export default Production