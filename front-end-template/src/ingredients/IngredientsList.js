import { Link } from "react-router-dom";

import { IngredientListItem } from "./IngredientListItem";

export const IngredientsList = ({ ingredients, isLoading, onDelete }) => (
  <div className="list-container">
    <h1>Ingredients</h1>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      ingredients.map((ingredient) => (
        <IngredientListItem
          key={ingredient.name}
          ingredient={ingredient}
          onDelete={onDelete}
        />
      ))
    )}
    <Link to="/add-ingredient">
      <button className="space-before">+ Add Ingredient</button>
    </Link>
  </div>
);
