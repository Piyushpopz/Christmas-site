import React from 'react'

// ✅ Import all assets properly
import socks from '../assets/socks.jpg'
import bow from '../assets/bow.png'
import cookies from '../assets/cookies.jpg'
import marshmallows from '../assets/marshmallows.jpg'
import legos from '../assets/christmas legos.jpg'
import hotchocolate from '../assets/hotchoclates.jpg'

const Production = () => {
  return (
    <>
      <div className='w-full h-[460px] bg-white overflow-x-hidden'>
        <div className='w-full h-full overflow-x-auto flex gap-10 p-10 no-scrollbar'>

          {/* 1️⃣ Socks */}
          <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl relative'>
              <img src={socks} alt="Christmas Socks" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
              <img src={bow} alt="bow" className='w-[80px] h-[80px] object-cover absolute top-[-30px] left-[-20px] rotate-[-20deg]' />
            </div>
            <div className='w-full h-[40%] px-5 py-2 flex flex-col items-center gap-2'>
              <h1 className='text-white font-medium text-xl'>Christmas Socks</h1>
              <p className='text-white/80 text-sm text-center'>
                Soft, warm, and festive! These Christmas socks add the perfect holiday charm to every step.
              </p>
              <button className='px-8 py-1.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>
                Buy
              </button>
            </div>
          </div>

          {/* 2️⃣ Cookies */}
          <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl relative'>
              <img src={cookies} alt="Cookies" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
              <img src={bow} alt="bow" className='w-[80px] h-[80px] object-cover absolute top-[-30px] left-[-20px] rotate-[-20deg]' />
            </div>
            <div className='w-full h-[40%] px-5 py-2 flex flex-col items-center gap-2'>
              <h1 className='text-white font-medium text-xl'>Cookies</h1>
              <p className='text-white/80 text-sm text-center'>
                Freshly baked and full of flavor! The perfect sweet treat for the holidays.
              </p>
              <button className='px-8 py-1.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>
                Buy
              </button>
            </div>
          </div>

          {/* 3️⃣ Marshmallows */}
          <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl relative'>
              <img src={marshmallows} alt="Marshmallows" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
              <img src={bow} alt="bow" className='w-[80px] h-[80px] object-cover absolute top-[-30px] left-[-20px] rotate-[-20deg]' />
            </div>
            <div className='w-full h-[40%] px-5 py-2 flex flex-col items-center gap-2'>
              <h1 className='text-white font-medium text-xl'>Marshmallows</h1>
              <p className='text-white/80 text-sm text-center'>
                Soft, fluffy, and sweet! Add comfort to your winter treats.
              </p>
              <button className='px-8 py-1.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>
                Buy
              </button>
            </div>
          </div>

          {/* 4️⃣ Christmas Legos */}
          <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl relative'>
              <img src={legos} alt="Christmas Legos" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
              <img src={bow} alt="bow" className='w-[80px] h-[80px] object-cover absolute top-[-30px] left-[-20px] rotate-[-20deg]' />
            </div>
            <div className='w-full h-[40%] px-5 py-2 flex flex-col items-center gap-2'>
              <h1 className='text-white font-medium text-xl'>Christmas Legos</h1>
              <p className='text-white/80 text-sm text-center'>
                Build your own holiday magic with this festive Lego set.
              </p>
              <button className='px-8 py-1.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>
                Buy
              </button>
            </div>
          </div>

          {/* 5️⃣ Hot Chocolate */}
          <div className='w-[300px] h-full shrink-0 bg-blue-600 rounded-2xl'>
            <div className='w-full h-[60%] rounded-t-2xl relative'>
              <img src={hotchocolate} alt="Hot Chocolate" className='w-full h-full object-fill border-2 border-blue-600 rounded-t-2xl' />
              <img src={bow} alt="bow" className='w-[80px] h-[80px] object-cover absolute top-[-30px] left-[-20px] rotate-[-20deg]' />
            </div>
            <div className='w-full h-[40%] px-5 py-2 flex flex-col items-center gap-2'>
              <h1 className='text-white font-medium text-xl'>Hot Chocolate</h1>
              <p className='text-white/80 text-sm text-center'>
                Rich, creamy, and warming — perfect for cozy winter nights.
              </p>
              <button className='px-8 py-1.5 bg-white rounded-full cursor-pointer hover:bg-amber-300'>
                Buy
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Production