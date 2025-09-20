import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

export default function TodoListItem({
  isCompleted,
  text,
  id,
  isChanging,
  handleCheckBox,
  handleDeleteTodo,
  handleChangeTodo,
  handleEditTodo,
}: {
  isCompleted: boolean;
  text: string;
  id: number;
  isChanging: boolean;
  handleCheckBox: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  handleChangeTodo: (id: number) => void;
  handleEditTodo: (id: number, text: string) => void;
}) {
  return (
    <>
      {/* 할 일이 완료되면 .todo__item--complete 추가 */}
      <li className={`todo__item ${isCompleted && "todo__item--complete"}`}>
        {!isChanging && (
          <Checkbox
            parentClassName="todo__checkbox-group"
            type="checkbox"
            className="todo__checkbox"
            onClick={() => handleCheckBox(id)}
          >
            {text}
          </Checkbox>
        )}
        {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
        {isChanging && (
          <input
            type="text"
            className="todo__modify-input"
            value={text}
            onChange={(e) => handleEditTodo(id, e.target.value)}
          />
        )}
        <div className="todo__button-group">
          <Button
            className="todo__action-button"
            onClick={() => handleChangeTodo(id)}
          >
            <SvgPencil />
          </Button>
          <Button
            className="todo__action-button"
            onClick={() => handleDeleteTodo(id)}
          >
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  );
}
