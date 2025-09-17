import Profile from "./components/Profile";

export default function App() {
  const clickHandler = () => {
    alert("팔로우가 완료됐습니다!");
  };
  return (
    <>
      <Profile
        backgroundImg={
          "https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userName="Sally Ramos"
        instaId="@sallytheramos"
        clickHandler={clickHandler}
      />
    </>
  );
}
