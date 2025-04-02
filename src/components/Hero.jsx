import React from 'react';
import HeroImage from '/img/Hero.svg';
const Hero = () => {
  return (
    <div
      className="w-full h-[110vh] bg-cover bg-center -z-10"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-white text-[16px] font-[600]'>Chào mừng đến với Cleena</h1>
        <p className='text-white text-[74px] font-[400] max-w-[800px] text-center'><span className='text-[#D1AE62]'>Support for </span>a Calm and Relaxed Mind</p>
        <button className="text-[18px] font-bold border-white border-[1px] text-white px-5 py-2 mt-8 relative
  before:absolute before:w-full before:h-full before:translate-x-1 before:translate-y-1 
  before:bg-white before:bg-opacity-50 before:content-[''] before:-z-9 before:top-0 before:left-0">Get An Appointment <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default Hero;
