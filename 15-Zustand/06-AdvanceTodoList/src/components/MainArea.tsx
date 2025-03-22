import { FaPlus } from "react-icons/fa";
import { useStore } from "../store/useStore";

const MainArea = () => {
  const {
    lists,
    workspace,
    selectedList,
    selectedWorkSpace,
    todoText,
    setSelectedList,
    setSelectedWorkSpace,
    setTodotext,
    handleAddTodo,
  } = useStore();

  return (
    <div className="flex-1 p-6">
      <div className="mb-4">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodotext(e.target.value)}
          placeholder="Add a new Todo"
          className="border border-gray-500 p-2 rounded-lg w-full"
        />
        <div className="mt-2 flex items-center">
          <select
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
            className="border border-gray-500 p-2 rounded-lg mr-2"
          >
            <option value="" disabled>
              Select List
            </option>
            {lists?.length > 0 &&
              lists.map((list, index) => (
                <option key={index} value={list.name}>
                  {list.emoji} {list.name}
                </option>
              ))}
          </select>
          <select
            value={selectedWorkSpace}
            onChange={(e) => setSelectedWorkSpace(e.target.value)}
            className="border border-gray-500 p-2 rounded-lg  ml-2"
          >
            <option value="" disabled>
              Select WorkSpace
            </option>
            {workspace?.length > 0 &&
              workspace.map((eachWorkSpace, index) => (
                <option key={index} value={eachWorkSpace.name}>
                  {eachWorkSpace.emoji} {eachWorkSpace.name}
                </option>
              ))}
          </select>
          <button
            onClick={handleAddTodo}
            className="bg-black text-white px-4 py-2 rounded-lg ml-4 flex items-center gap-x-2"
          >
            <FaPlus /> Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainArea;
