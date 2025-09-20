import React from "react";
import Button from "./html/Button";
import Input from "./html/Input";

export default function TodoEditor({
  value,
  handleChange,
  handleAddTodo,
}: {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <form className="todo__form">
        <div className="todo__editor">
          <Input
            type="text"
            className="todo__input"
            placeholder="Enter Todo List"
            onChange={handleChange}
            value={value}
          />
          <Button
            className="todo__button"
            type="submit"
            onClick={handleAddTodo}
          >
            Add
          </Button>
        </div>
      </form>
    </>
  );
}
