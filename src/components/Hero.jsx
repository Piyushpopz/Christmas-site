import React from 'react'
import santaVideo from '../assets/clip santa.mp4'
import cap from '../assets/cap.png'

const Hero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">

      {/* Background Video */}
      <video
        src={santaVideo}
        className="w-full h-full object-cover absolute top-0 left-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative h-full flex flex-col justify-center px-20">

        <div className="flex flex-col gap-6 max-w-[700px]">

          <h1 className="text-black text-6xl font-bold">
            Celebrate the Festival of Giving
          </h1>

          <p className="text-black text-lg">
            Discover special festival deals and heartwarming gifts crafted just for the holidays.
            Give love, share joy, and enjoy the warmth of the season.
          </p>

          <img
            src={cap}
            alt="cap"
            className="w-16 h-12 object-contain rotate-[-15deg]"
          />

          <div className="flex gap-4 mt-4">
            <button className="bg-white px-6 py-2 rounded-full cursor-pointer hover:bg-amber-300 transition">
              Shop Now
            </button>

            <button className="border-2 border-white text-white px-6 py-2 rounded-full cursor-pointer hover:bg-amber-300 hover:text-white hover:border-amber-300 transition">
              Explore More
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Hero