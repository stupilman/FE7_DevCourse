import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  handleCheckBox,
  handleDeleteTodo,
  handleChangeTodo,
  handleEditTodo,
}: {
  todos: {
    id: number;
    text: string;
    isCompleted: boolean;
    isChanging: boolean;
  }[];
  handleCheckBox: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  handleChangeTodo: (id: number) => void;
  handleEditTodo: (id: number, text: string) => void;
}) {
  // const content =
  return (
    <>
      <ul className="todo__list">
        {todos.length === 0 && <TodoListEmpty />}
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            isCompleted={todo.isCompleted}
            text={todo.text}
            id={todo.id}
            isChanging={todo.isChanging}
            handleCheckBox={handleCheckBox}
            handleDeleteTodo={handleDeleteTodo}
            handleChangeTodo={handleChangeTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}
      </ul>
    </>
  );
}
