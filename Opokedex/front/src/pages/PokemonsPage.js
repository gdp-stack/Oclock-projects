import React, { useEffect, useState } from "react";
import PokemonCard from "../components/cards/PokemonCard";
import Pokemons from "../components/datacomponents/Pokemons";

function PokemonsPage() {
  const [pokemons, setPokemons] = useState(null);

  return (
    <div>
      <Pokemons setPokemons={setPokemons} />

      {pokemons ? (
        pokemons.length > 0 ? (
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pokemons.map((pokemon) => (
                <PokemonCard
                  key={`${pokemon.id}`}
                  name={pokemon.name}
                  id={`${pokemon.id}`}
                  imageUrl={`/assets/img/${pokemon.id}.webp`}
                  types={pokemon.pokemon_type}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>Aucun pokemon n'a été trouvé</div>
        )
      ) : (
        <div>Chargement des pokemons...</div>
      )}
    </div>
  );
}

export default PokemonsPage;
