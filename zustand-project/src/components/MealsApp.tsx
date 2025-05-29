import React from 'react';
import { useMealStore } from '../mealStore';

const MealsApp = () => {
  const { meals, searchQuery, setMeals, setQuery } = useMealStore();
  return <div>MealsApp</div>;
};

export default MealsApp;
