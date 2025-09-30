import { useState } from "react";

export default function TodoInput({
  addTodo,
}: {
  addTodo: (title: string) => void;
}) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>추가</button>
    </>
  );
}
