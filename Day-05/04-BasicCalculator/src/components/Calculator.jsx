import { useState } from "react";

const Calculator = () => {
  const buttons = [
    "C",
    "/",
    "*",
    "🔙",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "%",
    "0",
    ".",
  ];

  const [data, setData] = useState("");

  return (
    <div className="bg-black/50 rounded-3xl h-[90vh] w-[30vw]">
      <div className="w-full h-[30vh] bg-black rounded-3xl text-white flex items-end justify-end pb-10 pr-10 text-7xl">
        {data ? data : <div className="">😴</div>}
      </div>
      <div className="grid grid-cols-4 gap-1 h-[60vh] place-items-center">
        {buttons.map((button) => (
          <button
            key={Math.random()}
            className="text-2xl px-7 py-5 bg-gray-600 rounded-full"
            onClick={() => {
              if (button === "=") {
                // Never to use eval method in production because of the security risks.
                setData(eval(data));
                return;
              }
              if (button === "C") {
                setData("");
                return;
              }
              if (button === "🔙") {
                setData((prev) =>
                  String(prev).slice(0, prev.toString().length - 1)
                );
                return;
              }

              setData((prev) => prev + button);
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
