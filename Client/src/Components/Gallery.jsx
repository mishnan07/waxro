import React from 'react';

const Gallery = () => {
  const img1 = '/public/Fortnite_20180630171046 1.png';
  const img2 = '/public/5daa24d7cc4a0a62650c6b28 1.png';
  const img3 = '/public/maxresdefault 1.png';

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-black p-4'>
      <div className='text-center'>
        <img src={img1} alt='' className='mx-auto mb-2' />
        <p className='w-full text-white font-roboto text-base sm:text-lg md:text-base lg:text-lg xl:text-lg font-light leading-normal tracking-tight capitalize'>
          Explore large, destructible environments where no two games are ever the same.
        </p>
      </div>
      <div className='text-center'>
        <img src={img2} alt='' className='mx-auto mb-2' />
        <p className='w-full text-white font-roboto text-base sm:text-lg md:text-base lg:text-lg xl:text-lg font-light leading-normal tracking-tight capitalize'>
          Team up with friends by sprinting, climbing, and smashing your way to earn your Victory Royale.
        </p>
      </div>
      <div className='text-center'>
        <img src={img3} alt='' className='mx-auto mb-2' />
        <p className='w-full text-white font-roboto text-base sm:text-lg md:text-base lg:text-lg xl:text-lg font-light leading-normal tracking-tight capitalize'>
          Discover even more ways to play across thousands of creator-made game genres.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
