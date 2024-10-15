import React from 'react';
import donate from '../assets/donate.svg'; 
import gp from '../assets/gp.png';
import Footer from './Footer';

const Donate = () => {
  return (
    <div className="flex flex-col min-h-screen bg-lime-950 p-10">
      <div id="donate" className="flex flex-1 justify-between items-center mt-10">
        <div className="flex-1 flex items-center">
          <h2 className="text-8xl font-semibold text-white">
            <span className="text-purple-500">{'>'}</span> Donate
          </h2>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={donate} alt="Donate" className="w-3/4 h-auto" />
        </div>
      </div>
      <div className="-mx-10 mt-10">
        <img src={gp} alt="Bottom Image" className="w-full h-auto" />
      </div>
      <Footer className="mt-10" /> 
    </div>
  );
}

export default Donate;
