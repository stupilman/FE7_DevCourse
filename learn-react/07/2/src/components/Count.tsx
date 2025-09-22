import { useReducer } from "react";
import reducer from "../reducer/countReducer";

export default function Count() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
    </>
  );
}
