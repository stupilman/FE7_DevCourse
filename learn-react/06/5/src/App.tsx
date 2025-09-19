import { useState } from "react";
import Count from "./components/Count";
import CountOutside from "./components/CountOutside";

// 상태 끌어올리기(State Lifting)
// 여러 컴포넌트가 같은 상태를 공유해야 할 때, 그 상태를 공통 부모 컴포넌트로 옮겨서 관리하는 패턴
export default function App() {
  const [count, setCount] = useState(0);

  const handlePlus = () => setCount((prev) => prev + 1);
  const handleMinus = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);
  return (
    <>
      <Count
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        handleReset={handleReset}
        count={count}
      />
      <CountOutside count={count} />
    </>
  );
}
