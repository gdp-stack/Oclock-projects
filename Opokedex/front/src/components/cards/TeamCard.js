import React, { useState } from "react";
import DeletePokemonFromTeamModal from "../modals/DeletePokemonFromTeamModal";

function TeamCard({ name, id, description, pokemons }) {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDeletePokemonFromTeamButton = (e) => {
    console.log(e.target.id);
    setSelectedPokemonId(e.target.id);
    setSelectedTeamId(id);
    setShowModal(true);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {pokemons.length > 0 ? (
            pokemons.map((pokemon, index) => (
              <li key={`li-${id}-${index}`}>
                <div
                  id={`${pokemon.pokemon.id}`}
                  className="flex items-center gap-x-6 overflow-hidden transform hover:scale-105 transition-transform duration-300"
                  onClick={handleDeletePokemonFromTeamButton}
                >
                  <img
                    id={`${pokemon.pokemon.id}`}
                    alt=""
                    src={`/assets/img/${pokemon.pokemon.id}.webp`}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                  <div>
                    <h3
                      id={`${pokemon.pokemon.id}`}
                      className="text-base font-semibold leading-7 tracking-tight text-gray-900"
                    >
                      {pokemon.pokemon.name}
                    </h3>
                    <div className="mt-2">
                      {pokemon.pokemon.pokemon_type &&
                        pokemon.pokemon.pokemon_type.length > 0 && (
                          <div>
                            {pokemon.pokemon.pokemon_type.map((type, index) => (
                              <p
                                id={`${pokemon.pokemon.id}`}
                                key={`p-${id}-${index}`}
                                className="inline-block rounded-full px-3 py-1 text-sm font-semibold mb-4 mr-2"
                                style={{
                                  backgroundColor: `#${type.type.color}`,
                                  color: "white",
                                }}
                              >
                                {type.type.name}
                              </p>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="flex items-center gap-x-6">
              <i>Pas de pokemons pour le moment...</i>
            </div>
          )}
        </ul>
      </div>
      {showModal && (
        <DeletePokemonFromTeamModal
          selectedPokemonId={selectedPokemonId}
          selectedTeamId={selectedTeamId}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default TeamCard;
