export { db } from "./db";
export { getPopulatedMeals } from "./getPopulatedMeals";
export { getIngredients } from "./getIngredients";
export { deleteMeal } from "./deleteMeal";
export { deleteIngredient } from "./deleteIngredient";
export { insertIngredient } from "./insertIngredient";
export { searchRecipes } from "./searchRecipes";
export { insertMeal } from "./insertMeal";

/**
mongo [shell]
use meal-tracker
db.recipes.find({}).pretty()
db.recipes.createIndex({name: "text"})
db.meals.deleteOne({_id: ObjectId(532r32532)})
db.meals.insert({recipeId: "123", plannedDate: new Date()})
db.ingredients.insert({"name" : "Macaroni", "amount" : 2, "units" : "cups" })

mongod
mongoimport --db meal-tracker --collection recipes --jsonArray --file ./recipes.json
*/
