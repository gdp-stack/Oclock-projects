import React, { useEffect, useState } from "react";
import TeamCard from "../components/cards/TeamCard";
import Teams from "../components/datacomponents/Teams";
import DeleteTeamModal from "../components/modals/DeleteTeamModal";
import AddNewTeamModal from "../components/modals/AddNewTeamModal";

function TeamsPage() {
  const [teams, setTeams] = useState(null);
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);
  const [showDeleteTeamModal, setShowDeleteTeamModal] = useState(false);

  const onDelete = (e) => {
    e.preventDefault();
    setShowDeleteTeamModal(true);
  };

  const onAdd = (e) => {
    e.preventDefault();
    setShowAddTeamModal(true);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {console.log("TeamsPage composant redering")}
      <div className="mb-4 flex justify-end">
        <button
          onClick={onAdd}
          className="bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Créer une équipe
        </button>
        <button
          onClick={onDelete}
          className="ml-3 bg-red-600 text-white rounded-md py-2 px-4 text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Supprimer une équipe
        </button>
      </div>
      <Teams setTeams={setTeams} />
      {teams ? (
        teams.length > 0 ? (
          <div className="w-full max-w-5xl">
            {teams.map((team) => (
              <div
                key={team.id}
                className="border border-gray-300 bg-white p-2 rounded-2xl shadow mb-6"
              >
                <TeamCard
                  name={team.name}
                  id={team.id}
                  description={team.description}
                  pokemons={team.team_pokemon}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>Aucune équipe n'a été trouvé.</div>
        )
      ) : (
        <div>Chargement des équipes...</div>
      )}
      {showAddTeamModal && (
        <AddNewTeamModal
          setShowAddTeamModal={setShowAddTeamModal}
          teams={teams}
        />
      )}
      {showDeleteTeamModal && (
        <DeleteTeamModal setShowDeleteTeamModal={setShowDeleteTeamModal} />
      )}
    </div>
  );
}

export default TeamsPage;
