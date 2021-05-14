import { db } from "./db";

export const searchRecipes = async (searchString) => {
  const connection = db.getConnection();
  const meals = await connection
    .collection("recipes")
    .find({ $text: { $search: searchString } })
    .toArray();

  return meals;
};
