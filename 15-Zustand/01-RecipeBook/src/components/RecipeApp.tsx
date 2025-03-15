import { useState } from "react";
import { Recipe, useStore } from "../store/useStore";

const RecipeApp = () => {
  const { recipes, addRecipe, updateRecipe, removeRecipe } = useStore();

  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    ) {
      return;
    }

    if (editingRecipe) {
      updateRecipe({
        id: editingRecipe.id,
        name,
        ingredients: ingredients
          .split(",")
          .map((ingredient) => ingredient.trim()),
        instructions,
      });
      setEditingRecipe(null);
    } else {
      addRecipe({
        id: Date.now(),
        name,
        ingredients: ingredients.split(" "),
        instructions,
      });
    }

    setName("");
    setIngredients("");
    setInstructions("");
  };

  const handleEdit = (recipeToEdit: Recipe) => {
    setName(recipeToEdit.name);
    setIngredients(recipeToEdit.ingredients.join(" "));
    setInstructions(recipeToEdit.instructions);
    setEditingRecipe(recipeToEdit);
  };

  const handleCancelEdit = () => {
    setName("");
    setIngredients("");
    setInstructions("");
    setEditingRecipe(null);
  };

  return (
    <div className="text-white w-1/3 flex flex-col gap-y-10">
      {/* Recipe Form */}
      <div className="flex flex-col p-4 rounded-3xl bg-slate-700 gap-y-6">
        <h1 className="text-2xl text-center">Recipe Book</h1>

        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name Here..."
            value={name}
            className="bg-black p-2 rounded-xl placeholder:pl-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={ingredients}
            placeholder="Ingredients Here..."
            className="bg-black p-2 rounded-xl placeholder:pl-2"
            onChange={(e) => setIngredients(e.target.value)}
          />
          <input
            type="text"
            value={instructions}
            placeholder="Instructions Here..."
            className="bg-black p-2 rounded-xl placeholder:pl-2"
            onChange={(e) => setInstructions(e.target.value)}
          />
          <div className={` flex ${editingRecipe ? "justify-between" : ""}`}>
            <button
              type="submit"
              className="bg-green-700 w-fit px-4 py-2 rounded-2xl"
            >
              {editingRecipe ? "Update Recipe" : "Add Recipe"}
            </button>
            {editingRecipe && (
              <button
                onClick={handleCancelEdit}
                className="bg-red-700 w-fit px-4 py-2 rounded-2xl"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Recipe List */}
      <div className="flex flex-col p-8 rounded-3xl bg-slate-700 gap-y-6 ">
        <p className="text-center text-2xl ">Recipes List :</p>
        {recipes.map((eachRecipe) => (
          <div
            key={eachRecipe.id}
            className={`p-4 rounded-xl ${
              editingRecipe?.id === eachRecipe.id
                ? "bg-purple-900"
                : "bg-white/10"
            }`}
          >
            <p>Recipe : {eachRecipe.name}</p>
            <div>Ingredients : {eachRecipe.ingredients.join(" , ")}</div>
            <p>Instructions : {eachRecipe.instructions}</p>
            <div className="flex justify-between  mt-4">
              <button
                className="bg-blue-700 w-fit px-4 py-2 rounded-2xl"
                onClick={() => handleEdit(eachRecipe)}
              >
                Edit Recipe
              </button>
              <button
                className="bg-red-700 w-fit px-4 py-2 rounded-2xl"
                onClick={() => removeRecipe(eachRecipe.id)}
              >
                Remove Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeApp;
