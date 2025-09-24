import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";
import { AppState } from "../store/store.ts";

export default function TodoList() {
  const todos = useSelector((state: AppState) => state.todos.todos);
  return (
    <>
      <ul className="todo__list">
        {/* 할 일 목록이 없을 때  */}
        {todos.length === 0 && <TodoListEmpty />}
        {/* <TodoListEmpty /> */}
        {/* 할 일 목록이 있을 때 */}
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}
