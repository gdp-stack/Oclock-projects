import React, { useEffect, useState } from "react";
import apiClient from "../../services/apiClient.js";

function Teams({ setTeams }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiClient.dataFetch("teams");
        setTeams(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setTeams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return null;
}

export default Teams;
