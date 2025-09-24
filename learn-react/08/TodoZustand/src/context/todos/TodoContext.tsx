import { createContext } from "react";

type TodoContextType = {
  todos: Todo[];
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
});

type TodoActionContextType = {
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoActionContext = createContext<TodoActionContextType>({
  addTodo: () => {},
  toggleTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
});
