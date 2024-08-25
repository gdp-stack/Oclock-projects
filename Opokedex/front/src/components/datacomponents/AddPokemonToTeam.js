import React, { useEffect, useState } from "react";
import apiClient from "../../services/apiClient.js";

function AddPokemonToTeam({
  selectedTeamId,
  selectedPokemonId,
  setAddPokemon,
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Vérifier les Pokémons actuels de l'équipe
        const teamPokemons = await apiClient.dataFetch(
          `teams/${selectedTeamId}`
        );
        // Vérifier si le Pokémon est déjà dans l'équipe
        const isPokemonInTeam = await teamPokemons.team_pokemon.some(
          (pokemon) => Number(pokemon.pokemon.id) === Number(selectedPokemonId)
        );
        if (isPokemonInTeam) {
          throw new Error("Le Pokémon est déjà dans l'équipe.");
        }
        // Vérifier si l'équipe a déjà 6 Pokémons
        if (teamPokemons.team_pokemon.length >= 6) {
          throw new Error("L'équipe a déjà 6 Pokémons.");
        }

        // Ajouter le Pokémon à l'équipe
        const data = await apiClient.dataFetch(
          `pokemons/${selectedPokemonId}/team-ajout/`,
          "POST",
          {
            team_id: `${Number(selectedTeamId)}`,
          }
        );
        setAddPokemon(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setAddPokemon]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return null;
}

export default AddPokemonToTeam;
