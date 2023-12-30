import React from 'react';
import Banner from '../Components/Banner';
import Gallery from '../Components/Gallery';
import Contribution from '../Components/Contribution';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto bg-black p-4 sm:p-6 lg:p-8'>
      <Banner />
      <div className='mt-8 sm:mt-12 lg:mt-16'>
        <Gallery />
      </div>
      <div className='mt-8 sm:mt-12 lg:mt-16'>
        <Contribution />
      </div>
      <div className='mt-8 sm:mt-12 lg:mt-16'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
