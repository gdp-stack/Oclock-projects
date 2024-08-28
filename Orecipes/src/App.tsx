import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import myAxiosInstance, {
  removeTokenFromInstance,
  addTokenToAxiosInstance,
} from './axios/axios';
import {
  saveTokenAndPseudoInLocalStorage,
  getTokenAndPseudoFromLocalStorage,
  removePseudoAndTokenFromLocalStorage,
} from './localstorage/localstorage';
import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import HomePage from './component/HomePage/HomePage';
import RecipeDetail from './component/RecipeDetail/RecipeDetail';
import type { recipes } from './@types/types.d';

function App() {
  const [recipes, setRecipes] = useState<recipes[] | null>(null);
  const [pseudo, setPseudo] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const logIn = async (emailFromInput: string, passFromInput: string) => {
    try {
      const response = await myAxiosInstance.post('/login', {
        email: emailFromInput,
        password: passFromInput,
      });
      console.log(response);

      setPseudo(response.data.pseudo);
      setIsConnected(true);
      setError(null);

      addTokenToAxiosInstance(response.data.token);
      saveTokenAndPseudoInLocalStorage(
        response.data.pseudo,
        response.data.token,
      );
    } catch (e) {
      console.log(e);

      setError('erreur de connexion');
    }
  };

  const logOut = () => {
    setIsConnected(false);
    setPseudo(null);

    removeTokenFromInstance();
    removePseudoAndTokenFromLocalStorage();
  };

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await myAxiosInstance.get('/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    }

    getRecipes();
  }, []);

  // on recupere le path (l'url) pour l'ajouter au tableau de dependances de l'effet scroll to top
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // remonter en hautde page
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  useEffect(() => {
    const infosFromLocalStorage = getTokenAndPseudoFromLocalStorage();

    if (infosFromLocalStorage.pseudo) {
      // si le pseudo n'est pas null on le place dans le state
      setPseudo(infosFromLocalStorage.pseudo);
      setIsConnected(true);
    }
    if (infosFromLocalStorage.token) {
      // si le token n'est pas null on le place dans l'instance axios
      addTokenToAxiosInstance(infosFromLocalStorage.token);
    }
  }, []);

  return (
    <div className="flex bg-white">
      {recipes && <Sidebar recipes={recipes} />}
      <div className="flex-1">
        <Header
          isConnected={isConnected}
          error={error}
          pseudo={pseudo}
          logIn={logIn}
          logOut={logOut}
        />
        <div className="p-4">
          <Routes>
            <Route
              path="/"
              element={
                recipes ? (
                  <HomePage recipes={recipes} />
                ) : (
                  <p>Chargement des recettes...</p>
                )
              }
            />
            <Route
              path="/:recipeSlug"
              element={
                recipes ? (
                  <RecipeDetail recipes={recipes} />
                ) : (
                  <p>Chargement de la recette...</p>
                )
              }
            />
            {/* Optional 404 route */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
