import React, { useState } from "react";
import AddPokemonToTeamModal from "../modals/AddPokemonToTeamModal";

const PokemonCard = ({ name, id, imageUrl, types }) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddTeamClickButton = (e) => {
    e.preventDefault();
    setSelectedPokemonId(id);
    setShowModal(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center p-6 bg-gray-100">
        <img
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">#{id}</p>
        {types && types.length > 0 && (
          <div>
            {types.map((type, index) => (
              <span
                key={index}
                className="inline-block rounded-full px-3 py-1 text-sm font-semibold mb-4"
                style={{
                  backgroundColor: `#${type.type.color}`,
                  color: "white",
                }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-around border-t pt-4">
          <button
            className="flex items-center text-gray-700 hover:text-gray-900"
            onClick={handleAddTeamClickButton}
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
            </svg>
            Ajouter à une Equipe
          </button>
        </div>
      </div>
      {showModal && (
        <AddPokemonToTeamModal
          selectedPokemonId={selectedPokemonId}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default PokemonCard;
