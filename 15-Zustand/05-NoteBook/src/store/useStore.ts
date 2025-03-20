import { create } from "zustand";

interface NoteState {
  text: string;
  color: string;
}

interface NotesStoreState {
  notes: NoteState[];
  search: string;
  editorContent: string;
  noteColor: string;
  currentNoteIndex: number | null;
  setNotes: (updatedNotes: NoteState[]) => void;
  setSearch: (searchTerm: string) => void;
  setEditorContent: (content: string) => void;
  setNoteColor: (color: string) => void;
  setCurrentNoteIndex: (index: number | null) => void;
  addOrUpdateNote: () => void;
  selectNote: (index: number) => void;
}

export const useNotesStore = create<NotesStoreState>((set) => ({
  notes: [],
  search: "",
  editorContent: "",
  noteColor: "#ffffff",
  currentNoteIndex: null,
  setNotes: (updatedNotes: NoteState[]) => set(() => ({ notes: updatedNotes })),
  setSearch: (searchTerm: string) => set(() => ({ search: searchTerm })),
  setEditorContent: (content: string) =>
    set(() => ({ editorContent: content })),
  setNoteColor: (color: string) => set(() => ({ noteColor: color })),
  setCurrentNoteIndex: (index: number | null) =>
    set(() => ({ currentNoteIndex: index })),
  addOrUpdateNote: () =>
    set((state) => {
      const { notes, editorContent, noteColor, currentNoteIndex } = state;
      if (editorContent.trim()) {
        if (currentNoteIndex !== null) {
          const updatedNotes = [...notes];
          updatedNotes[currentNoteIndex] = {
            text: editorContent,
            color: noteColor,
          };
          return {
            notes: updatedNotes,
            editorContent: "",
            noteColor: "#ffffff",
            currentNoteIndex: null,
          };
        } else {
          return {
            notes: [...notes, { text: editorContent, color: noteColor }],
            editorContent: "",
            noteColor: "#ffffff",
            currentNoteIndex: null,
          };
        }
      }
    }),
  selectNote: (index: number) =>
    set((state) => ({
      currentNoteIndex: index,
      editorContent: state.notes[index].text,
      noteColor: state.notes[index].color,
    })),
}));
