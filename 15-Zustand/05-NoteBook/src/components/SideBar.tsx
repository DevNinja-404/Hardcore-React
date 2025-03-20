import { FiSearch } from "react-icons/fi";
import { useNotesStore } from "../store/useStore";

const SideBar = () => {
  const { setCurrentNoteIndex, notes, search, setSearch, selectNote } =
    useNotesStore();

  const filteredNotes = notes.filter((eachNote) =>
    eachNote.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-1/5 bg-white p-4 shadow-lg rounded-r-3xl border ">
      <div className="flex items-center mb-4 ">
        <FiSearch className="text-xl mr-2" />
        <input
          type="text"
          placeholder="Search Notes "
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="w-full border-b focus:outline-0"
        />
      </div>
      {/* Notes List: */}
      <div className="felx flex-col gap-y-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              className="flex gap-x-6 items-center p-4 shadow-md cursor-pointer border hover:bg-gray-300 rounded-lg"
              onClick={() => selectNote(index)}
            >
              <div
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: note.color }}
              />
              <div
                className="truncate"
                dangerouslySetInnerHTML={{ __html: note.text }}
                // This dangerouslySetInnerHTML is the property which allows us to set Html content directly within the component and as the name suggeests it highlights the potential risk with injecting the html contnet directly inside of the component such as like cross-site scripting if the html content is not properly sanitized.Never use it in the production but it's fun to know that it exists
              ></div>
            </div>
          ))
        ) : (
          <p className="text-center mt-10">No Notes Found</p>
        )}
      </div>
    </div>
  );
};

export default SideBar;
