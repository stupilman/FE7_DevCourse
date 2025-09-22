import { useTodo } from "./Todo";
import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const { todos, toggleTodo, updateTodo, deleteTodo } = useTodo();
  return (
    <>
      <ul className="todo__list">
        {/* 할 일 목록이 없을 때  */}
        {todos.length === 0 && <TodoListEmpty />}
        {/* <TodoListEmpty /> */}
        {/* 할 일 목록이 있을 때 */}
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
