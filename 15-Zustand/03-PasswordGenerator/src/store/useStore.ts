import { create } from "zustand";

type PasswordState = {
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUppercase: boolean;
  includeLowercase: boolean;
  generatedPassword: string;
  setLength: (length: number) => void;
  toogleNumbers: () => void;
  toogleSymbols: () => void;
  toogleUppercase: () => void;
  toogleLowercase: () => void;
  generatePassword: () => void;
};

export const useStore = create<PasswordState>((set) => ({
  length: 10,
  includeNumbers: true,
  includeSymbols: false,
  includeUppercase: false,
  includeLowercase: false,
  generatedPassword: "",
  setLength: (length) => set({ length }),
  toogleNumbers: () =>
    set((state) => ({ includeNumbers: !state.includeNumbers })),
  toogleSymbols: () =>
    set((state) => ({ includeSymbols: !state.includeSymbols })),
  toogleLowercase: () =>
    set((state) => ({ includeLowercase: !state.includeLowercase })),
  toogleUppercase: () =>
    set((state) => ({ includeUppercase: !state.includeUppercase })),
  generatePassword: () =>
    set((state) => {
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+{}[]=-<>";
      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const uppercase = "ABCDEFGHIJKLMNOPQRESTUVWXYZ";

      let characters = "";
      let generatedPassword = "";

      if (state.includeNumbers) characters += numbers;
      if (state.includeSymbols) characters += symbols;
      if (state.includeLowercase) characters += lowercase;
      if (state.includeUppercase) characters += uppercase;

      const charactersLength = characters.length;

      for (let i = 0; i < state.length; i++) {
        const index = Math.floor(Math.random() * charactersLength);
        generatedPassword += characters.charAt(index);
      }

      return { generatedPassword };
    }),
}));
