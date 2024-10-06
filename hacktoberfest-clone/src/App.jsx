import React from "react";
import "./App.css"; // Ensure to import the CSS file

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-custom-green py-4 mx-20">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center ms-4">
            <img
              src="src/assets/icon.png"
              alt="Hacktoberfest logo"
              className="hack-icon"
            />
            <div class="w-5">
              <h1 className="text-xl font-bold">HACKTOBER FEST</h1>
            </div>
          </div>
          <nav className="flex space-x-7 me-12 items-center">
            <a href="#" className="nav-link">
              PARTICIPATION
            </a>
            <a href="#" className="nav-link">
              EVENTS
            </a>
            <a href="#" className="nav-link">
              DONATE
            </a>
            <a href="#" className="nav-link">
              ABOUT
            </a>
            <a href="#" className="nav-link">
              JOIN DISCORD
            </a>
            <button className="bg-blackish-grey text-white px-10 py-5 rounded-full">
              {" "}
              {/* Change to rounded-full for more curve */}
              START HACKING
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-custom-green mb-20 mx-20 flex items-center justify-center ">
        <h1 className="text-5xl md:text-8xl text-center px-20">
          A month-long <strong>celebration</strong> of all things open-source
        </h1>
        {/* Blocky Design at the Bottom */}
        
      </section>
      {/* Blocky Design at the Bottom */}
      <div className=" mb-15">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          
        </div>
        <div className="moving-block"></div>
    </div>
  );
}
