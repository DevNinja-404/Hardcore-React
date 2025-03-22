import { FaPlus } from "react-icons/fa";
import { useStore } from "../store/useStore";

const SideBar = () => {
  const { lists, workspace, openListModal, openWorkSpaceModal } = useStore();

  return (
    <div className="w-60  bg-white/50 shadow-lg rounded-r-2xl flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">Lists</h3>
          {/* Rendering Lsits: */}
          <button
            className="flex justify-center items-center mt-[1rem]"
            onClick={openListModal}
          >
            <FaPlus className="mr-2" />
            List
          </button>
          {lists.length > 0 ? (
            <ul className="flex flx-col gap-y-2 mt-4">
              {lists.map((list, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer flex items-center w-full"
                >
                  <span>{list.emoji}</span>
                  <span className="ml-2">{list.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center p-2 mt-5">List is Empty...</p>
          )}
        </div>
        <div className="p-4 mt-10">
          <h3 className="text-lg font-semibold flex items-center">
            WorkSpaces
          </h3>
          {/* Rendering WorkSpaces: */}
          <button
            className="flex justify-center items-center mt-[1rem]"
            onClick={openWorkSpaceModal}
          >
            <FaPlus className="mr-2" />
            WorkSpace
          </button>
          {workspace.length > 0 ? (
            <ul className="flex flx-col gap-y-2 mt-4">
              {workspace.map((eachWorkSpace, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer flex items-center w-full"
                >
                  <span>{eachWorkSpace.emoji}</span>
                  <span className="ml-2">{eachWorkSpace.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center p-2 mt-5">WorkSpace is Empty...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
