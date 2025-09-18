import { useState } from "react";

export default function App() {
  // 리 렌더링(re-rendering)
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // setCount(count + 1); // 0 -> 1
    // setCount(count + 1); // 1 -> 2
    // setCount(count + 1); // 2 -> 3
    // setCount(10); // setCount(값)

    setCount((prev) => prev + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prev) => prev + 1);
    // setCount((count) => count + 1); // setCount(콜백함수)
  };
  const [name, setName] = useState("");
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>클릭</button>
      <h1>Name: {name}</h1>
      <button onClick={() => setName("kim")}>클릭(문자)</button>
    </>
  );
}
