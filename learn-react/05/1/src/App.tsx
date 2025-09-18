// 요소를 반복 렌더링 하려면
// 그 요소를 가공해서 가공된 값이 포함된 배열로 만들어주면 됨
// 그리고 그 배열을 표현식으로 출력하면 됨

import UserCard from "./components/UserCard";

export default function App() {
  // const items = ["Apple", "Banana", "Cherry"];
  const users = [
    { id: 1, name: "kim", age: 20 },
    { id: 2, name: "park", age: 40 },
    { id: 3, name: "lee", age: 24 },
  ];

  return (
    <>
      {/* 배열을 가공할 일이 없거나,배열의 뒷쪽으로만 새로운 요소가 추가 될 경우 -> index key 값으로 써도됨*/}
      {/* 배열을 가공해야 할 일이 있는데, 그 배열의 앞에 새로운 요소를 추가하거나,배열 요소와 요소 사이에 새로운 요소를 추가할 경우 -> index × */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}
