import useFetch from "../hooks/useFetch";

const Meals = () => {
  const [data] = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );

  return (
    <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-flow-row gap-5 w-[100vw] p-10 bg-amber-700 text-white/90">
      {data?.meals?.map(({ idMeal, strMeal, strMealThumb }) => (
        <div
          key={idMeal}
          className="bg-slate-950 flex flex-col items-center  justify-center p-2 pt-6 gap-y-5 rounded-2xl"
        >
          <div className=" ">
            <img
              src={strMealThumb}
              alt="meal.png"
              width={300}
              className="object-contain overflow-auto rounded-3xl"
            />
          </div>
          <div className="flex flex-row justify-around items-center w-full">
            <p className="text-center ">{strMeal}</p>
            <p>#{idMeal}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meals;
