{
  // 1. 타입 오퍼레이터
  // 1.1 유니온 타입 -> '|' (파이프), '||' (OR)
  // 1.1.1 의미는 비슷하다.
  // 1.1.2 A 또는 B 타입

  // 타입 가드 (type guard)
  // 런타임에 실제 검사 결과를 바탕으로 변수의 타입을 조금 더 좁게 추론하도록 타입스크립트에 힌트를 주는 문법

  let x: number | string | boolean = 10;

  const arr1: (string | number)[] = ["A", 10];
  const first = arr1[0];
  // first.toLowerCase();
  const second = arr1[1];

  const arr2: [string, number] = ["A", 10];
  const f = arr2[0];
  f.toLowerCase();

  const s = arr2[1];
  s.toFixed(0);

  // 1.2 인터섹션 타입 -> '&' (앰퍼샌드), &&(AND) (객체 타입에서 주로 사용)
  // 1.2.1 의미는 비슷하다.
  // 1.2.2 A 타입과 B 타입
  const user: { name: string; age: number } = {
    name: "kim",
    age: 20,
  };
  const user2: { name: string } & { age: number } = {
    name: "kim",
    age: 20,
  };
}
