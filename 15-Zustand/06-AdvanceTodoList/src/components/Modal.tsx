import { FaTimes } from "react-icons/fa";
import { useStore } from "../store/useStore";

const Modal = () => {
  const {
    isListModalOpen,
    isWorkSpaceModalOpen,
    modalName,
    modalEmoji,
    modalType,
    setModalName,
    setModalEmoji,
    setModalType,
    handleSaveModal,
    closeListModal,
    closeWorkSpaceModal,
  } = useStore();

  const handleClose = () => {
    if (modalType === "List") {
      closeListModal();
    } else if (modalType === "WorkSpace") {
      closeWorkSpaceModal();
    }
  };

  const handleSave = () => {
    handleSaveModal();
  };

  if (!isListModalOpen && !isWorkSpaceModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50">
      <div className="bg-white p-10 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">{`Create new ${modalType}`}</h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
        </div>
        <input
          type="text"
          value={modalName}
          onChange={(e) => setModalName(e.target.value)}
          placeholder={`Enter ${modalType} name`}
          className="border border-gray-500 p-2 rounded-lg w-full mb-4"
        />
        <input
          type="text"
          value={modalEmoji}
          onChange={(e) => setModalEmoji(e.target.value)}
          placeholder={`Enter ${modalType} emoji(optional)`}
          className="border border-gray-500 p-2 rounded-lg w-full mb-4"
        />
        <button
          onClick={handleSave}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
