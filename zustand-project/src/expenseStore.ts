import { create } from 'zustand';

export interface Expense {
  id: number;
  description: string;
  amount: number;
}

export interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
}

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),
  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));
