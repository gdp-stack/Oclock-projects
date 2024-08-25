import React, { useEffect, useState } from "react";
import apiClient from "../../services/apiClient.js";

const AddTeam = ({ setAddTeam, teams, formData, setMessage }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        {
          console.log("AddTeam composant redering");
        }
        // Vérifier que le nom de Team n'est pas déjà emprunté
        const isTeamNameRegularFormat = formData.name.startsWith("Team ");
        if (isTeamNameRegularFormat) {
          setMessage(`Le nom d'équipe ne démarre pas par "Team ".`);
          return null;
        }

        // Vérifier que le nom de Team n'est pas déjà emprunté
        const isTeamNameAlreadyExisting = await teams.some(
          (team) => team.name.toLowerCase() === formData.name.toLowerCase()
        );
        if (isTeamNameAlreadyExisting) {
          setMessage("Le nom d'équipe existe déjà.");
          return null;
        }

        // Créer l'équipe
        const data = await apiClient.dataFetch(`teams`, "POST", formData);
        setAddTeam(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return null;
};

export default AddTeam;
