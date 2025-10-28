"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count - 1)}>감소</button>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
