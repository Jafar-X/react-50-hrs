import React, { useEffect } from 'react';
import { useMealStore } from '../mealStore';

const MealsApp = () => {
  const { meals, searchQuery, setMeals, setSearchQuery } = useMealStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        );

        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="ml-12 flex items-center text-center text-xl font-semibold">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search a meal..."
          className="bg-amber-100 border-1 rounded-md mb-2"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="ml-14 flex items-center text-center text-xl font-semibold">
        <ul>
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <li key={meal.idMeal}>
                <h2>{meal.strMeal}</h2>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-50 w-80"
                />
              </li>
            ))
          ) : (
            <h2>Sorry, we couldn't find what you were looking for</h2>
          )}
        </ul>
      </div>
    </>
  );
};

export default MealsApp;
