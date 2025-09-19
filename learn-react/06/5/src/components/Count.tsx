import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

export default function Count({
  handlePlus,
  handleMinus,
  handleReset,
  count,
}: {
  handlePlus: () => void;
  handleMinus: () => void;
  handleReset: () => void;
  count: number;
}) {
  return (
    <>
      <h1>
        <CountDisplay count={count} />
        <CountButton
          handlePlus={handlePlus}
          handleMinus={handleMinus}
          handleReset={handleReset}
        />
      </h1>
    </>
  );
}
