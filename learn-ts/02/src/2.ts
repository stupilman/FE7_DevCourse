// 함수의 타입을 지정하는 방법
// 함수의 매개 변수와 반환 값의 타입을 지정하는 것
// function(n1: 매개변수 타입): 반환값의 타입 {}
// void
// never
{
  // 함수 선언문
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  console.log(sum(10, 20));

  function concat(str1: string, str2: string): string {
    return str1 + str2;
  }

  console.log(concat("Hello ", "Sucoding"));

  function printValue(value: string): void {
    console.log(value);
  }
  printValue("Hello");

  function throwError(msg: string) {
    throw new Error(msg);
  }
}
{
  // 함수 표현식
  // (1) - 함수 표현식의 타입을 지정하는 방법
  const sum1 = function sum(n1: number, n2: number): number {
    return n1 + n2;
  };

  // (2) - 변수에다가 함수 타입을 지정하는 방법
  const sum2: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };

  // (3) - 1,2번 방식을 둘 다 하는 방법
  const sum3: (n1: number, n2: number) => number = function sum(
    n1: number,
    n2: number
  ): number {
    return n1 + n2;
  };
}
{
  // 화살표 함수
  // (1) - 함수 표현식의 타입을 지정하는 방법
  const sum1 = (n1: number, n2: number): number => {
    return n1 + n2;
  };

  // (2) - 변수에다가 함수 타입을 지정하는 방법
  const sum2: (n1: number, n2: number) => number = (n1, n2) => {
    return n1 + n2;
  };

  // (3) - 둘다 하는 방법
  const sum3: (n1: number, n2: number) => number = (
    n1: number,
    n2: number
  ): number => {
    return n1 + n2;
  };
}
{
  // 옵셔널 파라미터
  function sum(n1: number, n2?: number): number {
    return n1 + (n2 || 0);
  }

  sum(10); // 10
  sum(10, 20); // 30
}
{
  // 매개변수가 콜백함수일 때
  // function log(msg: string) {
  //   console.log(msg);
  // }

  function printValue(callback: (msg: string) => void): void {
    callback("Hello");
  }

  printValue((msg: string) => {
    console.log(msg);
  });

  const createMultiplier: (factor: number) => (num: number) => number =
    (factor) => (num) =>
      num * factor;

  // function createMultiplier(factor: number): (num: number) => number {
  //   return function (num: number): number {
  //     return num * factor;
  //   };
  // }

  const multiplyByTwo = createMultiplier(2);
  console.log(multiplyByTwo(5));
}
{
  function sum(...numArr: number[]): number {
    return numArr.reduce((acc, cur) => acc + cur, 0);
  }
  sum(1, 2, 3, 4, 5);
}
{
  // 함수 오버로딩
  // 오버로드 시그니처를 활용해서 매개변수와 반환값의 경우의 수를 좁히는 방법
  function sum(a: string, b: string): string;
  function sum(a: number, b: number): number;
  function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else return `${a}${b}`;
  }

  const num = sum(10, 20);
  console.log(num);

  const str = sum("A", "B");
  console.log(str);
}
