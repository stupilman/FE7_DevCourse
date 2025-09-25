// 라우트(Route)
// 라우트들의 집합(Routes)

// 라우터 : 앱 전체에서 라우팅 시스템을 제공하는 컨테이너 (react-router)
// 라우트 : 특정 URL 패턴과 컴포넌트를 매핑하는 규칙

// 중첩 라우트 -> <Outlet />
// 레이아웃 라우트
// 라우트 프리픽스 -> URL에 공통 접두사

import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import DashBoard from "./pages/DashBoard.tsx";
import Summary from "./pages/Summary.tsx";
import Setting from "./pages/Setting.tsx";
import DefaultLayout from "./layout/DefaultLayout.tsx";
import NotFound from "./pages/NotFound.tsx";
import Team from "./pages/Team.tsx";

export default function App() {
  return (
    <>
      <Routes>
        {/*레이아웃 라우트*/}
        <Route element={<DefaultLayout />}>
          <Route index element={<Navigate to={'/home'} />}/>
          <Route path={"home"} element={<Home />} />
          <Route path={"about"} element={<About />} />

          {/*동적 세그먼트*/}
          {/*옵셔널 세그먼트 -> ?*/}
          <Route path={"team?/:id?/group/:groupId"} element={<Team />} />

          {/*라우트 프리픽스*/}
          <Route path={"v1"}>
            {/*동적 세그먼트 + 라우트 프리픽스*/}
            {/*<Route path={":id"} element={<Team />} />*/}
            {/*중첩 라우트*/}
            <Route path={"dashboard"} element={<DashBoard />}>
              <Route index={true} element={<Summary />} />
              <Route index={true} path={"setting"} element={<Setting />} />
            </Route>
          </Route>
        {/*스플릿*/}
        <Route path={"*"} element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}
