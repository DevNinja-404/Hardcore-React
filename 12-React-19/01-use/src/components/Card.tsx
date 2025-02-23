import { use, useContext } from "react";
import { ThemeContex } from "./Theme";

const Card = () => {
  // const context = useContext(ThemeContex);
  const context = use(ThemeContex);
  if (!context) throw new Error("Card must be used within a ThemeProvider");
  const { theme, toogleTheme } = context;

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-blue-100 text-black"
          : "bg-slate-900 text-white "
      } h-[50rem] w-[100vw] flex justify-center items-center gap-x-10 transition-all duration-1000`}
    >
      <h1>Theme Card</h1>
      <button
        className={`${
          theme === "light" ? "bg-black text-white" : "bg-green-900 text-black"
        } p-5 rounded-3xl transition-all duration-1000`}
        onClick={toogleTheme}
      >
        Toogle Theme
      </button>
    </div>
  );
};

export default Card;
