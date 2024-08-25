import React, { useEffect } from "react";

function Navbar() {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative text-gray-400 focus-within:text-gray-600">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-4.35-4.35M16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" />
          </svg>
        </span>
        <input
          className="bg-gray-800 text-white rounded-md pl-10 pr-4 py-2 focus:outline-none"
          placeholder="Rechercher"
          type="search"
        />
      </div>
    </div>
  );
}

export default Navbar;
