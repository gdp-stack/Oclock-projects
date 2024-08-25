import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-blue-900 text-white h-screen w-64 p-6">
      <div className="text-2xl font-bold mb-8">Accueil</div>
      <ul>
        <li className="mb-4 cursor-pointer">Cookies au beurre de cacahuète</li>
        <li className="mb-4 cursor-pointer">Macaron framboisier</li>
        <li className="mb-4 cursor-pointer">Tarte au citron meringuée</li>
        <li className="mb-4 cursor-pointer">Amandier</li>
        <li className="mb-4 cursor-pointer">Fondant au chocolat sans gluten</li>
        <li className="mb-4 cursor-pointer">Tarte banoffee</li>
      </ul>
    </div>
  );
};

export default Sidebar;
