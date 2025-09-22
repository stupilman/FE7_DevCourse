import { useContext } from "react";
import { CounterContext } from "../App";

export default function CountButtons() {
  const { increment, reset, decrement } = useContext(CounterContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
