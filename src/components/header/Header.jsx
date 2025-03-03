import React from 'react';
import { FaBell } from 'react-icons/fa'; 

const Header = () => {
  return (
    <header className="mt-6 relative p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://placehold.co/50x50" alt="Logo" className="h-14 w-14 mr-2 rounded-full" />
        <span className="text-xl font-bold">Neopay</span>
      </div>
      <div className="flex items-center">
        <button className="relative p-2 rounded-full border border-gray-400">
          <FaBell className="h-6 w-6" />  
        </button>
      </div>
    </header>
  );
};

export default Header;
