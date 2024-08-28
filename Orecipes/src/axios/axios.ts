import axios from 'axios';

// creation d'un instance axios
const myAxiosInstance = axios.create({
  baseURL: 'https://orecipesapi.onrender.com/api',
});

// ajout du token dans l'instance axios
export const addTokenToAxiosInstance = (token: string | null) => {
  myAxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// suppression du token de l'instance
export const removeTokenFromInstance = () => {
  myAxiosInstance.defaults.headers.common.Authorization = '';
};

export default myAxiosInstance;
