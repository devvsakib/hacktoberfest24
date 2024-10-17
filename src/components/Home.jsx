import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section with ID */}
      <section id="home" className="bg-custom-green mb-20 mx-20 flex items-center justify-center">
        <h1 className="text-5xl md:text-8xl text-center px-20">
          A month-long <strong>celebration</strong> of all things open-source
        </h1>
      </section>

      {/* Blocky Design at the Bottom */}
      <div className="mb-15">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
      <div className="moving-block"></div>
    </div>
  );
}

export default Home;
