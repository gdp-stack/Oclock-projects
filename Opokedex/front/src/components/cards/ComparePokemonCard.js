import React from "react";

const pokemons = [
  {
    id: 150,
    name: "Mewtwo",
    hp: 106,
    atk: 110,
    def: 90,
    atk_spe: 154,
    def_spe: 90,
    speed: 130,
    pokemon_type: [
      {
        type: {
          name: "Psy",
          color: "ff5599",
        },
      },
    ],
  },
  {
    id: 149,
    name: "Dracolosse",
    hp: 91,
    atk: 134,
    def: 95,
    atk_spe: 100,
    def_spe: 100,
    speed: 80,
    pokemon_type: [
      {
        type: {
          name: "Dragon",
          color: "7766ee",
        },
      },
      {
        type: {
          name: "Vol",
          color: "6699ff",
        },
      },
    ],
  },
];

function ComparePokemonCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {console.log(pokemons)}
      {pokemons.map((pokemon) => {
        return (
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">{pokemon.name}</h2>
            {/* ici on va ajouter l'avatar du pokemon et ses types */}
            <div className="flex items-center gap-x-6">
              <img
                alt=""
                src={`/assets/img/${pokemon.id}.webp`}
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
              />
              <div>
                <div className="mt-2">
                  {pokemon.pokemon_type && pokemon.pokemon_type.length > 0 && (
                    <div>
                      {pokemon.pokemon_type.map((type, index) => (
                        <p
                          key={`p-${pokemon.id}-${index}`}
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
            <table className="w-full mb-4">
              <tbody>
                <tr className="border-t">
                  <td className="py-2">HP</td>
                  <td className="py-2 text-right">{pokemon.hp}</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">ATK</td>
                  <td className="py-2 text-right">{pokemon.atk}</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">ATK SPEED</td>
                  <td className="py-2 text-right">{pokemon.atk_spe}</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">DEF</td>
                  <td className="py-2 text-right">{pokemon.def}</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">DEF SPEED</td>
                  <td className="py-2 text-right">{pokemon.def_spe}</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">SPEED</td>
                  <td className="py-2 text-right">{pokemon.speed}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default ComparePokemonCard;
