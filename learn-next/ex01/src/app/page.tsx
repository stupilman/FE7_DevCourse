export default function Page() {
  return (
    <>
      <h1>Page</h1>
    </>
  );
}

// "use client";

// import { useRouter } from "next/navigation";

// export default function HomePage() {
//   const router = useRouter();
//   // router.back() - 뒤로 가기
//   // router.forward() - 앞으로 가기
//   // router.hmrRefresh() - HMD 새로고침
//   // router.prefetch() - 상용 모드에서만
//   // router.push(url) - 라우트 전환
//   // router.refresh() - 현재 페이지 새로고침
//   // router.replace(url) - 라우트 전환(브라우저 히스토리 x)
//   console.log(router);

//   const handleRandomNumber = () => {
//     // 랜덤숫자...
//     alert("랜덤 숫자가 뽑혔습니다. 결과는 마이페이지에서 확인해주세요");
//     router.push("/docs");
//   };
//   return (
//     <>
//       <h1>홈</h1>
//       <button onClick={handleRandomNumber}>docs</button>
//     </>
//   );
// }
