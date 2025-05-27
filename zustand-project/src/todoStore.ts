import { create } from 'zustand';

export interface Todo {
  id: number;
  name: string;
  description: string;
  deadline: Date;
  isCompleted: boolean;
}

export interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
