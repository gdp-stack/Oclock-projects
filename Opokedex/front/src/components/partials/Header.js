import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  useEffect(() => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === location.pathname) {
        link.classList.add("text-white", "font-medium", "bg-gray-800");
        link.classList.remove("text-gray-400", "hover:text-white");
      } else {
        link.classList.remove("text-white", "font-medium", "bg-gray-800");
        link.classList.add("text-gray-400", "hover:text-white");
      }
      const navBar = document.querySelector(
        "div .relative.text-gray-400.focus-within\\:text-gray-600"
      );
      if (location.pathname !== "/") {
        navBar.classList.add("hidden");
      } else {
        navBar.classList.remove("hidden");
      }
    });

    //AJouter ici un query selector de la barre de recherche qui n'apparait que lorsque
    //la location.pathname est "Pokemons"
  }, [location]);

  return (
    <header className="bg-gray-900 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-white font-bold text-lg">
          <img
            src="/assets/icons/pokeball.svg"
            className="no-filter"
            alt="Pokeball Logo"
          />
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="px-3 py-2 rounded-md">
            Pokemons
          </a>
          <a href="/teams" className="px-3 py-2 rounded-md">
            Equipes
          </a>
          <a href="/comparateur" className="px-3 py-2 rounded-md">
            Comparateur
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative text-gray-400 focus-within:text-gray-600"></div>
        <img
          className="h-8 w-8 rounded-full"
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
      </div>
    </header>
  );
}

export default Header;
