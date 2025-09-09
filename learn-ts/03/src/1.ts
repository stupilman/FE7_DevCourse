{
  // 구조적 타이핑
  // 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
  const point: { x: number; y: number } = { x: 10, y: 20 };
  const position: { x: number; y: number } = point;

  const fn1: (a: number, b: number) => number = (a, b) => a + b;
  const fn2: (a: number, b: number) => number = fn1;
}
{
  // readonly
  const user: {
    readonly name: string;
    readonly age: number;
  } = {
    name: "kim",
    age: 20,
  };

  const numArr: readonly number[] = [1, 2, 3];
  const mixArr: readonly [number, string] = [10, "A"];
  // muxArr.push("A"); -> readonly로 선언했기 때문에 배열의 값 변환 불가
}
{
  // 인덱스 시그니처 [key: type]: type
  // 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법
  // 단점으로는 타입이 포괄적으로 변해서 key 추론을 제대로 못하게 됨
  const user: {
    [key: string]:
      | string
      | number
      | ({ address: string } & { zipcode: string });
  } = {
    name: "kim",
    age: 20,
  };

  const person: {
    name: string;
    gender: string;
  } = {
    name: "kim",
    gender: "male",
  };
}
{
  // 함수 -> 일급 객체
  const add: { (a: number, b: number): number } = (a, b) => a + b;

  const adds: (a: number, b: number) => number = (a, b) => a + b;
}
