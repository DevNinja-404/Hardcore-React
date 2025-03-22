import { MdMoreVert } from "react-icons/md";
import MainArea from "./components/MainArea";
import SideBar from "./components/SideBar";
import { useStore } from "./store/useStore";
import Modal from "./components/Modal";

const App = () => {
  const {
    todos,
    editIndex,
    setEditIndex,
    deleteTodo,
    editText,
    setEditText,
    dropdownIndex,
    handleEdit,
    handleUpdate,
    handleDropDownClick,
  } = useStore();

  return (
    <div className="flex h-screen ">
      <SideBar />
      <div className="flex-1 p-6">
        <MainArea />
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 ml-[2rem]">Todo List</h2>
          <ul className="list-disc pl-5 ">
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <li key={index} className="mb-2 ml-[2rem]">
                  {editIndex === index ? (
                    <div className="flex items-center gap-x-3">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border border-gray-500 p-1 rounded-lg mr-2"
                      />
                      <button
                        className=" bg-green-700 text-white px-4 py-2 rounded-xl cursor-pointer"
                        onClick={() => handleUpdate(index)}
                      >
                        Update
                      </button>

                      <button
                        className=" bg-gray-700 text-white px-4 py-2 rounded-xl cursor-pointer"
                        onClick={() => setEditIndex(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="relative flex justify-between items-center">
                      <div>
                        <span className="mr-4 flex gap-x-4">
                          <strong>{todo.text} </strong>
                          <span>List : {todo.list}</span>
                          <span>WorkSpace : {todo.workspace}</span>
                        </span>
                      </div>
                      <div className="flex items-center"></div>
                      <MdMoreVert
                        className="cursor-pointer"
                        size={26}
                        onClick={() => handleDropDownClick(index)}
                      />
                      {dropdownIndex === index && (
                        <div className="absolute right-5 top-2 mt-2 bg-white border rounded-lg shadow-lg">
                          <button
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-300 border-b w-full text-left"
                            onClick={() => handleEdit(index)}
                          >
                            Update
                          </button>
                          <button
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left"
                            onClick={() => deleteTodo(index)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default App;
