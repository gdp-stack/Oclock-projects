import React, { useState, useEffect } from "react";
import AddTeam from "./datacomponents/AddTeam";

const TeamAddForm = ({ setAddTeam, addTeam, setShowAddTeamModal, teams }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description } = e.target;
    console.log(e.target);
    setFormData({ name: name, description: description });
    setAddTeam(true);
    console.log(formData);
  };

  useEffect(() => {
    if (addTeam) {
      setShowAddTeamModal(false);
    }
  }, [addTeam]);

  return (
    <div className="flex flex-col items-start">
      {console.log("TeamAddForm composant redering")}
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        {/* reprendre ici l'affichage du message d'erreur */}
        {/* {avec message et setMEssage en props de AddTeam} */}
        <h2 className="text-xl text-red-700 font-bold mb-2">{message}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nom"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nom :
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nom de l'équipe (ex. Team XXXX)"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description :
            </label>
            <input
              type="text"
              id="desc"
              name="desc"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Description de l'équipe"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="ml-3 bg-red-600 text-white rounded-md py-2 px-4 text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Créer
            </button>
          </div>
        </form>
      </div>
      {addTeam &&
        (formData.name.length > 0 ? (
          formData.description.length > 0 ? (
            <AddTeam
              setAddTeam={setAddTeam}
              teams={teams}
              formData={formData}
              setMessage={setMessage}
            />
          ) : (
            setMessage("Il manque une description à l'équipe !")
          )
        ) : (
          setMessage("Il manque le nom de l'équipe !")
        ))}
    </div>
  );
};

export default TeamAddForm;
