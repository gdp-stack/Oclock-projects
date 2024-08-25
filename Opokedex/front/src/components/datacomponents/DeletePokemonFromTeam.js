import React, { useEffect, useState } from "react";
import apiClient from "../../services/apiClient.js";

function DeletePokemonToTeam({
  selectedTeamId,
  selectedPokemonId,
  setDeletePokemon,
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Supprimer le Pokémon de l'équipe
        const data = await apiClient.dataFetch(
          `teams/${selectedTeamId}/team-suppression/`,
          "DELETE",
          {
            pokemon_id: `${Number(selectedPokemonId)}`,
          }
        );
        setDeletePokemon(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setDeletePokemon]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return null;
}

export default DeletePokemonToTeam;
