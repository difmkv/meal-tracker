import { useState } from "react";

import { BackButton } from "../ui";
import { useIngredients } from "../ingredients";
import { useRecipeSearchResults } from "./useRecipeSearchResults";
import { RecipeSearchList } from "./RecipeSearchList";

export const RecipeSearchPage = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchString, setSearchString] = useState("");
  const { ingredients } = useIngredients();
  const { searchResults } = useRecipeSearchResults(searchString);

  const onSearchClicked = (e) => {
    setSearchString(searchInputValue);
  };

  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Add Meal to Plan</h1>
        <input
          type="text"
          className="full-width space-before space-after"
          placeholder="Enter keyword here"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <button className="full-width space-after" onClick={onSearchClicked}>
          Search
        </button>
        <RecipeSearchList recipes={searchResults} ingredients={ingredients} />
      </div>
    </div>
  );
};
