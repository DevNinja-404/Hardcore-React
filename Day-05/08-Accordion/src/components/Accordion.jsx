import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { LuMinus } from "react-icons/lu";

const Accordion = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col gap-y-3 text-white bg-blue-900 rounded-xl p-4 ">
      <div className="flex  justify-between min-w-[50vw]">
        <span>{data.question}</span>
        <button className="bg-black rounded-md py-2 px-2 hover:bg-black/50">
          {isActive ? (
            <LuMinus onClick={() => setIsActive(false)} />
          ) : (
            <FaPlus onClick={() => setIsActive(true)} />
          )}
        </button>
      </div>

      <div className={`ml-4  ${isActive ? " " : "hidden  "}`}>
        {"=> "}
        {data.answer}
      </div>
    </div>
  );
};

export default Accordion;
