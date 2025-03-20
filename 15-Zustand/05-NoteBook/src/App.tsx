import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNotesStore } from "./store/useStore";
import { AiOutlinePlus } from "react-icons/ai";
import SideBar from "./components/SideBar";

const App = () => {
  const {
    editorContent,
    noteColor,
    currentNoteIndex,
    setEditorContent,
    setNoteColor,
    addOrUpdateNote,
  } = useNotesStore();

  return (
    <div className="h-screen flex">
      <SideBar />
      {/* Main Area */}
      <div className="w-4/5 p-8">
        {/* Text Editor {React Quill} */}
        <ReactQuill
          theme="snow"
          className="h-1/2 bg-white mb-[2rem]"
          placeholder="Enter Your text here..."
          value={editorContent}
          onChange={setEditorContent}
        />

        {/* Color Selector */}
        <div className="flex ml-[1rem] items-center  mt-16 space-x-4">
          <input
            type="color"
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
            className="w-10 h-10 p-1.5 border  rounded-full"
          />
          <p>Choose a Note Color</p>
        </div>
        {/* Save Button: */}
        <button
          onClick={addOrUpdateNote}
          className="bg-blue-500 ml-[2rem] text-white py-2 px-6 mt-8 rounded-lg shadow-lg hover:bg-blue-900 flex items-center"
        >
          <AiOutlinePlus className="mr-2" />
          {currentNoteIndex !== null ? "Update Note" : "Save Note"}
        </button>
      </div>
    </div>
  );
};

export default App;
