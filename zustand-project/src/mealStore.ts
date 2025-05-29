import { create } from 'zustand';

interface Meals {
  mealId: string;
  mealStr: string;
  mealThumbStr: string;
}

interface MealState {
  meals: Meals[];
  searchQuery: string;
  setMeals: (meals: Meals[]) => void;
  setSearchQuery: (query: string) => void;
}

export const useMealStore = create<MealState>((set) => ({
  meals: [],
  searchQuery: '',
  setMeals: (meals: Meals[]) => set({ meals }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
