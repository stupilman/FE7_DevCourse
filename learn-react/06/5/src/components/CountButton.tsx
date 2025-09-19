export default function CountButton({
  handlePlus,
  handleMinus,
  handleReset,
}: {
  handlePlus: () => void;
  handleMinus: () => void;
  handleReset: () => void;
}) {
  return (
    <>
      <button onClick={handleMinus}>감소</button>
      <button onClick={handleReset}>0</button>
      <button onClick={handlePlus}>증가</button>
    </>
  );
}
