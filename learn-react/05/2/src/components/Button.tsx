export default function Button({
  handleClick,
  handleClick2,
}: {
  handleClick: (name: string) => void;
  handleClick2: () => void;
}) {
  return (
    <>
      <button onClick={() => handleClick("kim")}>클릭!!</button>
      <button onClick={handleClick2}>클릭!!</button>
    </>
  );
}
