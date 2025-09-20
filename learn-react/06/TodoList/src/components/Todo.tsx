import React, { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  isChanging: boolean;
}

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: value,
      isCompleted: false,
      isChanging: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setValue("");
  };
  const handleCheckBox = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (id !== todo.id) {
          return todo;
        }
        return { ...todo, isCompleted: !todo.isCompleted };
      })
    );
  };
  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => id !== todo.id));
  };
  const handleChangeTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (id !== todo.id) {
          return todo;
        }
        return { ...todo, isChanging: !todo.isChanging };
      })
    );
  };
  const handleEditTodo = (id: number, text: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (id !== todo.id) {
          return todo;
        }
        return { ...todo, text };
      })
    );
  };

  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor
          value={value}
          handleChange={handleChange}
          handleAddTodo={handleAddTodo}
        />
        {/* 할 일 목록  */}
        <TodoList
          todos={todos}
          handleCheckBox={handleCheckBox}
          handleDeleteTodo={handleDeleteTodo}
          handleChangeTodo={handleChangeTodo}
          handleEditTodo={handleEditTodo}
        />
      </div>
    </>
  );
}
