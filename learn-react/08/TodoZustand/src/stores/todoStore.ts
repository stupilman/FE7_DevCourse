import { create } from "zustand/react";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    immer((set, get) => ({
      todos: [],
      addTodo: (text: string) =>
        set((state) => {
          const uuid = (
            Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
          ).toUpperCase();
          state.todos = [...state.todos, { id: uuid, text, completed: false }];
        }),
      toggleTodo: (id: string) =>
        set((state) => {
          state.todos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
        }),
      deleteTodo: (id: string) =>
        set((state) => {
          state.todos = state.todos.filter((todo) => todo.id !== id);
        }),
      updateTodo: (id: string, text: string) =>
        set((state) => {
          state.todos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, text } : todo
          );
        }),
      resetIfTodo: () => {
        //   todo가 3개 이상일 때만 초기화하는 기능
        if (get().todos.length >= 3){
          set(state => {
            state.todos = []
          })
        }
      },
    }
    })),

    { name: "todo-store" }
  )
);
