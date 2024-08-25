import React, { useState, useEffect } from "react";
import Teams from "./datacomponents/Teams";

const TeamDropdownList = ({ selectedTeamId, setSelectedTeamId }) => {
  const [teams, setTeams] = useState(null);
  const handleLocationChange = (event) => {
    setSelectedTeamId(event.target.value);
  };

  return (
    <div className="flex flex-col items-start">
      <Teams setTeams={setTeams} />
      <select
        id="location"
        value={selectedTeamId}
        onChange={handleLocationChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        {teams ? (
          teams.length > 0 ? (
            teams.map((team) => {
              return <option value={team.id}>{team.name}</option>;
            })
          ) : (
            <option>Aucune équipe pour le moment.</option>
          )
        ) : (
          <option>Chargement des équipes...</option>
        )}
      </select>
    </div>
  );
};

export default TeamDropdownList;
