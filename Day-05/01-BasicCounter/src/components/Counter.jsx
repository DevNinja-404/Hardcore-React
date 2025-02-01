import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black p-8 text-white flex flex-col items-center gap-y-20 rounded-3xl min-w-1/2 lg:min-w-1/3">
      <div className="text-3xl">Count : {count}</div>
      <div className="flex gap-x-20">
        <div
          className="bg-green-900 p-4 rounded-2xl "
          onClick={() => setCount(count + 1)}
        >
          <FaPlus color="white" />
        </div>
        <div
          className="bg-green-900 p-4 rounded-2xl"
          onClick={() => setCount(count - 1)}
        >
          <FaMinus color="white" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
