import { useState } from "react";

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  updateTodo,
  toggleChangeTodo,
}: {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (text: string, id: number) => void;
  toggleChangeTodo: (id: number) => void;
}) {
  const [value, setValue] = useState("");

  const handleUpdate = (id: number) => {
    if (!value.trim()) return;
    updateTodo(value, id);
    setValue("");
    toggleChangeTodo(id)
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {!todo.isChanging && (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                {todo.title}
                <button onClick={() => toggleChangeTodo(todo.id)}>
                  수정하기
                </button>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </>
            )}
            {todo.isChanging && (
              <>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo.id)}>수정완료</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
