import type { recipes } from '../../@types/types.d';
import { NavLink } from 'react-router-dom';

type PropsRecipes = {
  recipes: recipes[];
};

const Sidebar = ({ recipes }: PropsRecipes) => {
  return (
    <div className="bg-blue-900 text-white w-64 p-6">
      <div className="text-2xl font-bold mb-8">
        <NavLink to="/">Accueil</NavLink>
      </div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mb-4 cursor-pointer">
            <NavLink
              to={`/${recipe.slug}`}
              className={({ isActive }) =>
                `hover:text-white hover:font-bold ${isActive ? 'text-white font-bold' : ''}`
              }
            >
              {recipe.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
