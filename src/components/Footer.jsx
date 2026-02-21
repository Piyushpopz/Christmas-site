import React from 'react'
import cap from '../assets/cap.png'

const Footer = () => {
  return (
    <div className="w-full bg-blue-600 text-white px-10 py-12">

      {/* Top Section */}
      <div className="flex justify-between">

        {/* Left Side */}
        <div className="w-[40%] flex flex-col gap-6">

          {/* Repeated Caps */}
          <div className="flex flex-wrap gap-2">
            {Array(12).fill().map((_, i) => (
              <img
                key={i}
                src={cap}
                alt="logo"
                className="w-16 h-12 object-contain"
              />
            ))}
          </div>

          <h1 className="text-3xl font-semibold">
            My-Christmas-Site
          </h1>

          <p className="text-white/80 max-w-[300px]">
            Warm lights, cozy vibes, Christmas magic everywhere.
            Lights on, hearts full. Merry Christmas!
          </p>

        </div>

        {/* Right Side */}
        <div className="w-[40%] flex flex-col gap-8">

          {/* Subscribe Section */}
          <div>
            <h2 className="text-xl font-medium mb-3">Subscribe</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[40px] rounded-md px-4 text-black"
            />
          </div>

          {/* Support Links */}
          <div>
            <h2 className="text-xl font-medium mb-3">Support</h2>
            <ul className="flex flex-col gap-2 text-white/70">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">All Rights Reserved</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/30 pt-6 text-center text-white/60 text-sm">
        © 2026 My-Christmas-Site. All rights reserved.
      </div>

    </div>
  )
}

export default Footer