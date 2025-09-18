// 이벤트

// import Button from "./components/Button";

// JSX 특징 -> 속성은 카멜 케이스로 작성한다.
export default function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = "red";
    console.log(e); // 명시적으로 전달해서 사용하셈
    console.log(event); // 사용하면 안됨
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // const handleClick2 = () => alert("hello");
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button onClick={(e) => handleClick(e)}>클릭</button>
      </form>

      {/* <Button handleClick={handleClick} /> */}
      {/* <Button handleClick={handleClick} handleClick2={handleClick2} /> */}
    </>
  );
}
