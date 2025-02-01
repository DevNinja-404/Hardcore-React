import { FaCheck, FaEdit, FaSave } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const EachTodo = ({ todo }) => {
  const [isEditable, setIsEditAble] = useState(false);

  const { toogleIsCompleted, removeTodo, modifyTodo } = useTodo();

  const [todoMessage, setTodoMessage] = useState(todo.todo);

  const handleEdit = () => {
    modifyTodo(todo.id, todoMessage);
  };

  return (
    <li className="flex gap-x-3 px-4">
      <input
        type="text"
        value={todoMessage}
        readOnly={!isEditable}
        className={`w-3/4 bg-white/60 text-xl rounded-md text-center text-black outline-0 ${
          isEditable ? "border-2 border-purple-700" : ""
        }`}
        onChange={(e) => setTodoMessage(e.target.value)}
      />
      <div className="flex gap-x-2">
        <button
          className="py-2 px-3 bg-green-900 rounded-md"
          onClick={() => toogleIsCompleted(todo.id)}
        >
          <FaCheck />
        </button>
        <button
          className="py-2 px-3 bg-blue-900 rounded-md "
          onClick={() => {
            if (isEditable) {
              handleEdit();
            }
            setIsEditAble((prev) => !prev);
          }}
        >
          {isEditable ? <FaSave /> : <FaEdit />}
        </button>

        <button
          className="py-2 px-3 bg-red-900 rounded-md"
          onClick={() => removeTodo(todo.id)}
        >
          <IoTrashBin />
        </button>
      </div>
    </li>
  );
};

export default EachTodo;
