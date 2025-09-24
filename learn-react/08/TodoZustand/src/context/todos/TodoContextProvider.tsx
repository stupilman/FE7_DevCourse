import React, { useCallback, useMemo, useState } from "react";
import { TodoActionContext, TodoContext } from "./TodoContext.tsx";

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
  const memoizationProvider = useMemo(
    () => ({ addTodo, toggleTodo, updateTodo, deleteTodo }),
    []
  );
  return (
    <>
      <TodoActionContext value={memoizationProvider}>
        <TodoContext value={{todos}}>{children}</TodoContext>
      </TodoActionContext>
    </>
  );
}
