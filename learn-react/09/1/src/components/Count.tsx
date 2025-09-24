import CountDisplay from "./CountDisplay.tsx";
import CountButtons from "./CountButtons.tsx";
import { useEffect } from "react";
import { useCounterStore } from "../stores/counterStore.ts";

export default function Count() {
  useEffect(() => {
    useCounterStore.subscribe(
      (state) => state.count,
      (newCount, prevCount) => {
        console.log(`count 변경됨: ${prevCount} -> ${newCount}`);
      }
    );
  }, []);
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
