import { create } from "zustand";

export interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (newExpense: Expense) => void;
  removeExpense: (id: number) => void;
  updateExpense: (updatedExpense: Expense) => void;
}

export const useStore = create<ExpenseStore>((set) => ({
  expenses: [],
  addExpense: (newExpense) =>
    set((state) => ({
      expenses: [...state.expenses, newExpense],
    })),
  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((eachExpense) => eachExpense.id !== id),
    })),
  updateExpense: (updatedExpense) =>
    set((state) => ({
      expenses: state.expenses.map((eachExpense) =>
        eachExpense.id === updatedExpense.id ? updatedExpense : eachExpense
      ),
    })),
}));
