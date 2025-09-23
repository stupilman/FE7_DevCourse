import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoContextProvider from "../context/todos/TodoContextProvider.tsx";

export default function Todo() {
  return (
    <TodoContextProvider>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor />
        {/* 할 일 목록  */}
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}
