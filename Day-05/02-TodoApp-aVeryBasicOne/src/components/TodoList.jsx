import { useTodo } from "../contexts/TodoContext";
import { IoTrashBin } from "react-icons/io5";
import EachTodo from "./EachTodo";

const TodoList = () => {
  const { todos, setTodos, removeTodo, toogleIsCompleted } = useTodo();

  return (
    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-y-10   lg:gap-x-8">
      <div className="bg-black  text-white py-4 rounded-2xl lg:w-1/2 h-fit">
        <p className="text-2xl text-center mb-6">Pending Todos : </p>
        {todos && todos.length > 0 && (
          <ul className="flex flex-col gap-y-4">
            {todos
              .filter((todo) => !todo.isCompleted)
              .map((todo) => (
                <EachTodo key={todo.id} todo={todo} />
              ))}
          </ul>
        )}
      </div>
      <div className="bg-black text-white py-4 rounded-2xl lg:w-1/2">
        <div className="flex justify-around items-center  mb-6">
          <p className="text-2xl text-center">Completed Todos : </p>
          <button
            className="bg-red-900 py-2 px-3 rounded-md "
            onClick={() => setTodos(todos.filter((todo) => !todo.isCompleted))}
          >
            Clear All
          </button>
        </div>
        {todos && todos.length > 0 && (
          <ul className="flex flex-col gap-y-4 px-5">
            {todos
              .filter((todo) => todo.isCompleted)
              .map((todo) => (
                <li
                  key={todo.id}
                  className="flex justify-center items-center gap-x-4"
                >
                  <div className="w-full py-0.5 bg-white/60 rounded-md text-center text-black text-xl">
                    {todo.todo}
                  </div>
                  <div className="flex gap-x-2">
                    <button
                      className=" py-1 px-2 bg-green-900 rounded-md text-xs"
                      onClick={() => toogleIsCompleted(todo.id)}
                    >
                      Set As Pending
                    </button>
                    <button
                      className="py-2 px-3 bg-red-900 rounded-md"
                      onClick={() => removeTodo(todo.id)}
                    >
                      <IoTrashBin />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
