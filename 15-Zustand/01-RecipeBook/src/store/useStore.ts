import { create } from "zustand";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

interface RecipeStore {
  recipes: Recipe[];
  addRecipe: (newRecipe: Recipe) => void;
  updateRecipe: (updatedRecipe: Recipe) => void;
  removeRecipe: (id: number) => void;
}

export const useStore = create<RecipeStore>((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((eachRecipe) =>
        eachRecipe.id === updatedRecipe.id ? updatedRecipe : eachRecipe
      ),
    })),
  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((eachRecipe) => eachRecipe.id !== id),
    })),
}));
