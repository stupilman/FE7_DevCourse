import TodoList from "./TodoList.tsx";
import TodoInput from "./TodoInput.tsx";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date(),
      isChanging: false,
    };

    setTodos((prevState) => [...prevState, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleChangeTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isChanging: !todo.isChanging } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (text: string, id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id === id ? { ...todo, title: text } : todo;
      })
    );
  };

  return (
    <>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
        toggleChangeTodo={toggleChangeTodo}
      />
      <TodoInput addTodo={addTodo} />
    </>
  );
}
