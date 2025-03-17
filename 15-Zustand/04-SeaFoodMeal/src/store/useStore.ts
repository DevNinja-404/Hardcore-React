import { create } from "zustand";

type MealsState = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type StoreState = {
  meals: MealsState[];
  searchQuery: string;
  setMeals: (meals: MealsState[]) => void;
  setSearchQuery: (query: string) => void;
};

export const useStore = create<StoreState>((set) => ({
  meals: [],
  searchQuery: "",
  setMeals: (meals: MealsState[]) => set(() => ({ meals })),
  setSearchQuery: (query: string) => set(() => ({ searchQuery: query })),
}));
