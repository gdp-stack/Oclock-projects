import type { recipes } from '../../@types/types.d';
import RecipeCard from '../RecipeCard/RecipeCard';

type PropsRecipes = {
  recipes: recipes[];
};

const HomePage = ({ recipes }: PropsRecipes) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Les recettes oRecipes</h2>
      <p className="mb-6">Voici nos 6 recettes</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
