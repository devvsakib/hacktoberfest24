import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-custom-green py-4 mx-20">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center ms-4">
          <img src="/icon.png" alt="Hacktoberfest Logo" className="hack-icon" />
          <h1 className="text-xl font-bold">HACKTOBER FEST</h1>
        </div>
        <nav className="flex space-x-7 me-12 items-center">
          <a href="#participation" className="nav-link">PARTICIPATION</a>
          <a href="#events" className="nav-link">EVENTS</a>
          <a href="#donate" className="nav-link">DONATE</a> {/* Link to Donate page */}
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#discord" className="nav-link">JOIN DISCORD</a>
          <button className="bg-blackish-grey text-white px-10 py-5 rounded-full">
            START HACKING
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
