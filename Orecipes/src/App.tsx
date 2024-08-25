import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import HomePage from './component/HomePage/HomePage';
import RecipeDetail from './component/RecipeDetail/RecipeDetail';
import type { recipes } from './@types/types.d';

function App() {
  const [recipes, setRecipes] = useState<recipes[] | null>(null);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await axios.get(
          'https://orecipesapi.onrender.com/api/recipes',
        );
        setRecipes(response.data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    }

    getRecipes();
  }, []);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
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
    </Router>
  );
}

export default App;
