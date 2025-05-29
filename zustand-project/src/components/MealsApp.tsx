import React, { useEffect } from 'react';
import { useMealStore } from '../mealStore';

const MealsApp = () => {
  const { meals, searchQuery, setMeals, setQuery } = useMealStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        );
      } catch (error) {
        console.error(error);
      }
    };
  }, [setMeals]);
  return <div>MealsApp</div>;
};

export default MealsApp;
