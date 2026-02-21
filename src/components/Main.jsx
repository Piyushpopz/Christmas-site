import React from 'react'
import giftVideo from '../assets/gift.mp4'

const Main = () => {
  return (
    <div className="w-full h-[500px] my-10 bg-blue-600 relative overflow-hidden">

      {/* Background Video */}
      <video
        src={giftVideo}
        className="w-full h-full object-cover absolute top-0 left-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="px-20 flex flex-col gap-6 max-w-[600px]">

          <h1 className="text-white text-4xl font-semibold">
            Celebrate the Sense of Giving
          </h1>

          <p className="text-white text-lg">
            Discover special festive deals and heartwarming gifts crafted just for the holidays.
            Give love, share joy! Enjoy the warmth of the holidays with soft lights and exclusive festive collections.
          </p>

          <div className="flex gap-4">
            <button className="bg-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-400 hover:text-white transition">
              Shop Now
            </button>

            <button className="border-2 border-white text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-400 hover:text-white transition">
              Explore More
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Main