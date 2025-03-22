import { create } from "zustand";

interface List {
  name: string;
  emoji: string;
}

interface WorkSpace {
  name: string;
  emoji: string;
}
interface Todo {
  text: string;
  list: string;
  workspace: string;
}

interface AppState {
  lists: List[];
  workspace: WorkSpace[];
  todos: Todo[];
  editIndex: number | null;
  editText: string;
  dropdownIndex: number | null;
  isListModalOpen: boolean;
  isWorkSpaceModalOpen: boolean;
  selectedList: string;
  selectedWorkSpace: string;
  todoText: string;
  modalName: string;
  modalEmoji: string;
  modalType: "List" | "WorkSpace" | null;
  addList: (listToAdd: List) => void;
  addWorkSpace: (workSpaceToAdd: WorkSpace) => void;
  addTodo: (todoToAdd: Todo) => void;
  updateTodo: (index: number, updatedTodo: Todo) => void;
  deleteTodo: (indec: number) => void;
  handleEdit: (index: number) => void;
  handleUpdate: (index: number) => void;
  handleDropDownClick: (index: number) => void;
  setEditText: (text: string) => void;
  setEditIndex: (index: number | null) => void;
  openListModal: () => void;
  closeListModal: () => void;
  openWorkSpaceModal: () => void;
  closeWorkSpaceModal: () => void;
  setSelectedList: (list: string) => void;
  setSelectedWorkSpace: (workSpace: string) => void;
  setTodotext: (text: string) => void;
  handleAddTodo: () => void;
  setModalName: (name: string) => void;
  setModalEmoji: (emoji: string) => void;
  setModalType: (type: "List" | "WorkSpace" | null) => void;
  handleSaveModal: () => void;
}

export const useStore = create<AppState>((set) => ({
  lists: [],
  workspace: [],
  todos: [],
  editIndex: null, //Which Todo we r currently editing
  editText: "", //
  dropdownIndex: null,
  isListModalOpen: false,
  isWorkSpaceModalOpen: false,
  selectedList: "",
  selectedWorkSpace: "",
  todoText: "",
  modalName: "",
  modalEmoji: "",
  modalType: null,

  addList: (listToAdd) =>
    set((state) => ({ lists: [...state.lists, listToAdd] })),

  addWorkSpace: (workSpaceToAdd) =>
    set((state) => ({ workspace: [...state.workspace, workSpaceToAdd] })),

  addTodo: (todoToAdd) =>
    set((state) => ({ todos: [...state.todos, todoToAdd] })),

  updateTodo: (index, updatedTodo) =>
    set((state) => {
      const newTodos = [...state.todos];
      newTodos[index] = updatedTodo;
      return { todos: newTodos, editIndex: null, editText: "" };
    }),

  deleteTodo: (index) =>
    set((state) => ({
      todos: [...state.todos].filter((_, i) => i !== index),
      dropdownIndex: null,
    })),

  handleEdit: (index) =>
    set((state) => ({
      editIndex: index,
      editText: state.todos[index].text,
      dropdownIndex: null,
    })), //to set editIndex and to set the todoText pf todo we r editing  to editText

  handleUpdate: (index) =>
    set((state) => {
      const updatedTodo = {
        ...state.todos[index],
        text: state.editText,
      };
      const newTodos = [...state.todos];
      newTodos[index] = updatedTodo;
      return {
        todos: newTodos,
        editIndex: null,
        editText: "",
      };
    }), //To update the todo

  handleDropDownClick: (index) =>
    set((state) => ({
      dropdownIndex: index === state.dropdownIndex ? null : index,
    })),

  setEditText: (text) => set({ editText: text }), //to know which todo we r editing

  setEditIndex: (index) => set({ editIndex: index }), //to know the updated text of the todo

  openListModal: () => set({ isListModalOpen: true, modalType: "List" }), //Open list modal to add new List

  closeListModal: () =>
    set({ isListModalOpen: false, modalName: "", modalEmoji: "" }), //close list modal

  openWorkSpaceModal: () =>
    set({ isWorkSpaceModalOpen: true, modalType: "WorkSpace" }), //Open workspace modal to add new workspace

  closeWorkSpaceModal: () =>
    set({ isWorkSpaceModalOpen: false, modalName: "", modalEmoji: "" }), //close workspace modal

  setSelectedList: (list) => set({ selectedList: list }), //which list we selected so that

  setSelectedWorkSpace: (workSpace) => set({ selectedWorkSpace: workSpace }),

  setTodotext: (text) => set({ todoText: text }),

  handleAddTodo: () =>
    set((state) => {
      const { todoText, selectedList, selectedWorkSpace } = state;
      if (todoText.trim() === "") {
        window.alert("Todo cannot be empty");
        return state;
      }

      const newTodo = {
        text: todoText,
        list: selectedList,
        workSpace: selectedWorkSpace,
      };

      return {
        todos: [...state.todos, newTodo],
        todoText: "",
        selectedList: "",
        selectedWorkSpace: "",
      };
    }), //to add todo

  setModalName: (name) => set({ modalName: name }), //modal name

  setModalEmoji: (emoji) => set({ modalEmoji: emoji }), //modal emoji

  setModalType: (type) => set({ modalType: type }), //modal type

  handleSaveModal: () =>
    set((state) => {
      const { modalName, modalEmoji, modalType } = state;
      if (modalName.trim() === "") return state;
      if (modalType === "List") {
        state.addList({ name: modalName, emoji: modalEmoji });
      } else if (modalType === "WorkSpace") {
        state.addWorkSpace({ name: modalName, emoji: modalEmoji });
      }
      return {
        modalName: "",
        modalEmoji: "",
        modalType: null,
        isListModalOpen: false,
        isWorkSpaceModalOpen: false,
      };
    }), //Save modal on the basis of whether it is list or workspace or null
}));
