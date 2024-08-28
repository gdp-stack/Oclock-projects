import type { recipes } from '../../@types/types.d';
import { Link } from 'react-router-dom';

type PropsRecip = {
  recipe: recipes;
};

const RecipeCard = ({ recipe }: PropsRecip) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={recipe.thumbnail}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-gray-700">{recipe.title}</h3>
        <p className="text-gray-500 mb-2">Difficulté: {recipe.difficulty}</p>
        <Link
          to={`/${recipe.slug}`}
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2 inline-block"
        >
          Voir la recette
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
