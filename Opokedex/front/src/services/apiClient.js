const apiClient = {
  async dataFetch(route, method = "GET", data = null) {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`http://localhost:5000/${route}`, options);

    if (!response.ok) {
      throw new Error("Pas de réponse du serveur");
    }
    return response.json();
  },
};

export default apiClient;
