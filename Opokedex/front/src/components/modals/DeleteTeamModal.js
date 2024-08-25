import React, { useState, useEffect } from "react";
import TeamDropdownList from "../TeamDropdownList";
import DeleteTeam from "../datacomponents/DeleteTeam";

const DeleteTeamModal = ({ setShowDeleteTeamModal }) => {
  const [selectedTeamId, setSelectedTeamId] = useState(1);
  const [deleteTeam, setDeleteTeam] = useState(false);

  const onAdd = (e) => {
    e.preventDefault();
    setDeleteTeam(true);
  };

  const onClose = (e) => {
    e.preventDefault();
    setShowDeleteTeamModal(false);
  };

  useEffect(() => {
    if (deleteTeam) {
      setShowDeleteTeamModal(false);
    }
  }, [deleteTeam]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11h-2v4h2V7zm0 6h-2v2h2v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Supprimer l'équipe :
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  <TeamDropdownList
                    selectedTeamId={selectedTeamId}
                    setSelectedTeamId={setSelectedTeamId}
                  />
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-auto bg-transparent border-0 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <span className="sr-only">Fermer</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Annuler
          </button>
          <button
            onClick={onAdd}
            className="ml-3 bg-red-600 text-white rounded-md py-2 px-4 text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Supprimer
          </button>
        </div>
      </div>
      {deleteTeam && (
        <DeleteTeam
          selectedTeamId={selectedTeamId}
          setDeleteTeam={setDeleteTeam}
        />
      )}
    </div>
  );
};

export default DeleteTeamModal;
