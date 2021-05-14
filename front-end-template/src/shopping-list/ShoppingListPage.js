import { BackButton } from "../ui";
import { useShoppingList } from "./useShoppingList";

export const ShoppingListPage = () => {
  const { isLoading, items } = useShoppingList();

  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Here's your shopping list:</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => <p key={item}>{item}</p>)
        )}
      </div>
    </div>
  );
};
