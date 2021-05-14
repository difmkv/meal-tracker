import { RecipeSearchListItem } from "./RecipeSearchListItem";

export const RecipeSearchList = ({ ingredients, recipes }) => (
  <>
    {recipes.map((recipe) => (
      <RecipeSearchListItem
        key={recipe.id}
        recipe={recipe}
        ingredients={ingredients}
      />
    ))}
  </>
);
