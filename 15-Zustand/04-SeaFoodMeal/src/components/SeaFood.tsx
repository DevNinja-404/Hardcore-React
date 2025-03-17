import { useEffect } from "react";
import { useStore } from "../store/useStore";

const SeaFood = () => {
  const { meals, searchQuery, setMeals, setSearchQuery } = useStore();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await response.json();
        setMeals(data.meals);
      };
      fetchData();
    } catch (error) {
      console.log(`Error while fetching data : ${error}`);
    }
  }, [setMeals]);

  const filteredMeals = meals.filter((eachMeal) =>
    eachMeal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="  min-h-screen bg-slate-800 text-white flex flex-col items-center py-10 px-10 gap-y-6">
      <p className="text-2xl font-semibold">SeaFood Recipes :</p>
      <div className="flex flex-col gap-y-2 w-1/2 ">
        <label htmlFor="searchMeal">Search SeaFood :</label>
        <input
          type="text"
          id="searchMeal"
          placeholder="Search Any SeaFood"
          className="px-4 py-2 bg-gray-200 rounded-2xl text-black"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid md:grid-cols-3 p-4  lg:grid-cols-4 space-x-6 space-y-4 w-full">
        {filteredMeals.length > 0 ? (
          filteredMeals?.map((eachMeals) => (
            <div
              key={eachMeals.idMeal}
              className="flex flex-col gap-y-1 bg-black p-2 rounded-2xl"
            >
              <div className="rounded-md overflow-hidden">
                <img
                  src={eachMeals.strMealThumb}
                  alt={`${eachMeals.strMeal}.png`}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
              <p className="text-center">{eachMeals.strMeal}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-xl  ">
            {filteredMeals.length === 0
              ? "Loading Meals..."
              : "No Meals Found..."}
          </p>
        )}
      </div>
    </div>
  );
};

export default SeaFood;
