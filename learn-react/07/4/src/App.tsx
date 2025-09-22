import { createContext, useState } from "react";
import Page from "./components/Page";

// 전역 상태 관리
// 1. Context API
// 2. Redux Toolkit
// 3. Zustand (주스탄드, 저스탠드, 져스탄드)
// + Mobx, recoil ...

// Context API
// 1. 컨텍스트 객체를 생성해야 함 -> createContext
// 2. 컨텍스트의 범위를 지정해야 함 -> <컨텍스트객체>공급범위</컨텍스트객체>
// 3. 데이터를 공급 -> 컨텍스트 객체에 value 속성을 사용
// 4. 공급한 것을 사용
type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
// eslint-disable-next-line react-refresh/only-export-components

// eslint-disable-next-line react-refresh/only-export-components
// export const CounterContext = createContext<CounterContextType>({
//   count: 0,
//   increment: () => {},
//   decrement: () => {},
//   reset: () => {},
// });
// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType | null>(null);

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => setCount(0);
  return (
    <>
      <CounterContext value={{ count, increment, decrement, reset }}>
        <Page />
      </CounterContext>
    </>
  );
}
