import React from 'react';

const Banner = () => {
  const banner = '/public/1dd8e61fcac2c9c7af98f1fbbf93d497.jpeg';

  return (
    <div className='bg-black flex flex-col items-center justify-center text-white'>
      <div className="text-center font-roboto text-4xl font-light leading-8 tracking-wide uppercase mb-8">
        Epic Games: An American video game and software developer and publisher based in Cary, North Carolina.
      </div>
      <div className="relative w-full mb-8">
        <img
          src={banner}
          alt="Epic Games Banner"
          className="w-full h-auto object-cover rounded-md shadow-lg"
        />
      </div>
      <div className="text-center font-poppins text-base font-normal opacity-80 mb-8">
        Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
      </div>
      <div>
        <button className="w-80 h-20 bg-white text-black rounded-md hover:bg-gray-300 transition duration-300">
          Visit Website
        </button>
      </div>
    </div>
  );
}

export default Banner;
