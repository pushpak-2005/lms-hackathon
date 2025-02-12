import React from 'react';

function Hero() { 
  return (
    <>
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-white'>
     <h1 className='md:text home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto sm:text-5xl'> A unified digital education platform covering all levels <span className='text-emerald-800'> from kindergarden to post-graduation. </span></h1>
    </div>
    <p className='md:block hidden text-gray-500 max-w-2xl mx-auto sm:text-xl/8'>From ABCs to PhDs: Uniting Education Under One Roof.</p>
    </>
  );
}

export default Hero;