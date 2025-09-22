import { createContext, useCallback, useContext, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error(
      "useTodo는 <TodoContext.Provider> 내부에서만 사용해야 합니다."
    );
  }
  return ctx;
}

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    const uuid = (
      Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
    ).toUpperCase();
    setTodos((prev) => [...prev, { id: uuid, text, completed: false }]);
  };
  const toggleTodo = useCallback((id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);
  const updateTodo = useCallback((id: string, text: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }, []);
  const deleteTodo = useCallback((id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <TodoContext value={{ todos, addTodo, toggleTodo, updateTodo, deleteTodo }}>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor />
        {/* 할 일 목록  */}
        <TodoList />
      </div>
    </TodoContext>
  );
}
