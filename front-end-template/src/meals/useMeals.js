import { useState, useEffect } from "react";

export const useMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rawMeals, setMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const response = await fetch("/meals", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const rawMealsResponse = await response.json();
      setMeals(rawMealsResponse);
      setIsLoading(false);
    };

    loadMeals();
  }, []);

  return {
    isLoading,
    meals: rawMeals.map((rawMeal) => ({
      ...rawMeal,
      plannedDate: new Date(rawMeal.plannedDate),
    })),
    setMeals,
  };
};
