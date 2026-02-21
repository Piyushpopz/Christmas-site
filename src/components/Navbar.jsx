import React from 'react'


const Navbar = () => {
  return (
    <>

<div className='flex justify-between p-5 z-10 w-full px-10 absolute '>
    <div>
        <ul  className='flex items-center gap-25 text-white'>
        <li><a  className='hover:text-amber-300 text-xl' href="#Home">Home</a></li>
         <li><a  className='hover:text-amber-300 text-xl' href="#Gallery">Gallery</a></li>
          <li><a  className='hover:text-amber-300 text-xl' href="#About Us">About Us</a></li>
           <li><a  className='hover:text-amber-300 text-xl' href="#Contact">Contact Us</a></li>


        </ul>
    </div>
    <div className='flex items-center gap-4'>
      <button className='bg-white px-6 py-1.5 rounded-full cursor-pointer hover:scale-102 hover:bg-amber-300 hover:text-white '>Login</button>
      <button className='bg-white px-6 py-1.5 rounded-full cursor-pointer hover:scale-102 hover:bg-amber-300 hover:text-white '>Sign Up</button>
    </div>

</div>








    </>
  )
}

export default Navbar