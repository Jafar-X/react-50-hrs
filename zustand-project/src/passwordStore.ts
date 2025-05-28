import { create } from 'zustand';
export interface PasswordState {
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUppercaseLetter: boolean;
  includeLowercaseLetter: boolean;
  generatedPassword: string;
  setLength: (length: number) => void;
  toggleNumbers: () => void;
  toggleSymbols: () => void;
  toggleUppercaseLetter: () => void;
  toggleLowercaseLetter: () => void;
  generatePassword: () => void;
}

const usePasswordStore = create<PasswordState>((set) => ({
  length: 12,
  includeNumbers: true,
  includeSymbols: true,
  includeUppercaseLetter: true,
  includeLowercaseLetter: true,
  generatedPassword: '',

  setLength: (length: number) => set({ length }),
  toggleNumbers: () =>
    set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleSymbols: () =>
    set((state) => ({ includeSymbols: !state.includeSymbols })),
  toggleUppercaseLetter: () =>
    set((state) => ({ includeUppercaseLetter: !state.includeUppercaseLetter })),
  toggleLowercaseLetter: () =>
    set((state) => ({ includeLowercaseLetter: !state.includeLowercaseLetter })),
  generatePassword: () =>
    set((state) => {
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()[]{}+-=.:';
      const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

      let characters = '';

      if (state.includeNumbers) characters += numbers;
      if (state.includeSymbols) characters += symbols;
      if (state.includeUppercaseLetter) characters += uppercaseLetters;
      if (state.includeLowercaseLetter) characters += lowercaseLetters;

      let password = '';
      for (let i = 0; i < state.length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }

      return { generatePassword: password };
    }),
}));

export default usePasswordStore;
