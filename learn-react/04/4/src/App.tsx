// 조건부 렌더링
// 조건에 따라 서로 다른 콘텐츠를 표시하는 방법
// 1. if
// 2. 삼항 연산자

import Login from "./components/Login";
import Logout from "./components/Logout";

export default function App() {
  const isLogin = false;
  // if (isLogin) return <h1>로그인 되었습니다.</h1>;
  // return <h1>로그인되지 않았습니다.</h1>;

  // return <h1>{isLogin ? "로그인 되었습니다." : "로그인되지 않았습니다."}</h1>;
  // return <>{isLogin ? <Login /> : <Logout />}</>;

  return (
    <>
      {isLogin && <Login />}
      {!isLogin && <Logout />}
    </>
  );
}
