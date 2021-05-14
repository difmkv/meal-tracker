import { db } from "./db";

export const getIngredients = async () => {
  const connection = db.getConnection();
  const ingredients = await connection
    .collection("ingredients")
    .find({})
    .toArray();
  return ingredients;
};
