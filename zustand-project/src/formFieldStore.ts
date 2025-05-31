import { create } from 'zustand';
interface FormField {
  label: string;
  type: 'text' | 'number' | 'password' | 'date' | 'textarea' | 'file';
  value: string;
}

interface FormState {
  formFields: FormField[];
  addField: (field: FormField) => void;
  removeField: (index: number) => void;
  updateField: (index: number, updatedField: FormField) => void;
  resetForm: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  formFields: [],
  addField: (field) =>
    set((state) => ({ formFields: [...state.formFields, field] })),
  removeField: (index) =>
    set((state) => ({
      formFields: state.formFields.filter((_, i) => i !== index),
    })),
  updateField: (index, updatedField) =>
    set((state) => ({
      formFields: state.formFields.map((field, i) =>
        i === index ? updatedField : field
      ),
    })),
  resetForm: () => set({ formFields: [] }),
}));
