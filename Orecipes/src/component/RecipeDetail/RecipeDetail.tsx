import { useParams } from 'react-router-dom';
import type { recipes } from '../../@types/types.d';

type PropsRecip = {
  recipes: recipes[];
};

const RecipeDetail = ({ recipes }: PropsRecip) => {
  const { recipeSlug } = useParams<{ recipeSlug: string }>();

  const selectedRecipe = recipes.find((recipe) => recipe.slug === recipeSlug);

  if (!selectedRecipe) {
    return <div>Recette non trouvée.</div>;
  }

  return (
    <div className="p-6">
      <div className="relative mb-6">
        <img
          src={selectedRecipe.thumbnail}
          alt={selectedRecipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-4 text-white">
          <h2 className="text-2xl font-bold">{selectedRecipe.title}</h2>
          <p>
            {selectedRecipe.author} - {selectedRecipe.difficulty}
          </p>
        </div>
      </div>

      <div className="mb-6">
        {selectedRecipe.ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <span className="bg-blue-500 text-white font-bold px-4 py-1 rounded">
              {ingredient.quantity}
            </span>
            <span className="text-lg">{ingredient.name}</span>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <ul className="list-disc pl-5 space-y-2">
          {selectedRecipe.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-700">
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
