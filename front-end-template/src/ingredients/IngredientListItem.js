import { SmallX } from "../ui";

export const IngredientListItem = ({ ingredient, onDelete }) => (
  <div className="list-item">
    <h3>{ingredient.name}</h3>
    <p>
      {ingredient.amount} {ingredient.units}
    </p>
    <div className="right-action">
      <SmallX onClick={() => onDelete(ingredient.name)} />
    </div>
  </div>
);
