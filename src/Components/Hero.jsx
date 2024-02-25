// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        className='w-full h-[500px] object-cover'
        src="https://www.shutterstock.com/shutterstock/photos/1553605427/display_1500/stock-vector-yellow-background-abstract-with-gradient-in-empty-room-studio-yellow-empty-room-studio-gradient-1553605427.jpg"
        alt="Background"
      />

      {/* Navbar */}
      <nav className='absolute top-0 left-0 right-0 flex justify-between p-4 text-white ml-[200px]'>
        <h2 className='text-xl font-bold'>Logo</h2>
        <ul className='flex space-x-4 mr-[200px]'>
          <li className='cursor-pointer'><a href="">Home</a></li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Career</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>
      </nav>

      {/* Content on Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="flex flex-col items-center mt-[80px] ">
            <h2 className="text-6xl font-bold mb-4">AWARD WINNING AGENCY</h2>
            <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui at nemo adipisci.</div>
            <button className="bg-transparent border border-white rounded-2xl text-white px-4 py-2 mt-4 h-10 w-[300px]">Learn More</button>
          </div>
          <div>
            <img className='h-[400px] order-5 ml-[900px] mt-[-145px] overflow-hidden' src="https://i.pinimg.com/originals/77/03/5e/77035e3d3121bb43980f05e87e1be6fa.png" alt="" />
          </div> 
        </div>
      </div> 

      <div className='flex justify-center items-center h-16 w-full bg-white'>
        <h1 className=' text-2xl'>Lets Build Something Great</h1>
      </div>

    </div>
  );
};

export default Hero;
