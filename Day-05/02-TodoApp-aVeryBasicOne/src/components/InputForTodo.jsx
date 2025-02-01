import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const InputForTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  return (
    <div className="bg-black w-full lg:w-1/2 text-white py-4 rounded-2xl">
      <div className="flex flex-col items-center gap-y-5">
        <label htmlFor="todoInput" className="text-3xl">
          Add Todo :
        </label>
        <div className="flex gap-x-4 w-full justify-center">
          <input
            type="text"
            id="todoInput"
            value={todo}
            placeholder="Your Todo Here"
            onChange={(e) => setTodo(e.target.value)}
            className=" border rounded-md py-2 w-2/3 max-w-[80vw]  placeholder:text-center  outline-0 text-center"
          />
          <button
            className="px-5 py-2 bg-green-900 rounded-lg"
            onClick={() => {
              addTodo(todo);
              setTodo("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForTodo;
