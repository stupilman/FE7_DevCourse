{
  // 1.
  // 함수 정의
  const add: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2;
  };

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}
{
  // 2.
  // 함수 정의
  const greet = (name: string) => {
    return `Hello, ${name}`;
  };

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}
{
  // 3.
  // 함수 정의
  const sumAll = (...num: number[]): number => {
    return num.reduce((acc, cur) => acc + cur, 0);
  };

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}
{
  // 4.
  // 함수 정의
  const sum = (a: number, b: number = 0): number => a + b;

  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}
{
  // 5.
  // 함수 정의
  const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
  };

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}
{
  // 6.
  // 함수 정의
  // const concatStringAndNumber = (a: string, b: number): string => a + b;
  const concatStringAndNumber: (a: string, b: number) => string = (a, b) =>
    `${a}${b}`;

  // 함수 호출
  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"
}
{
  // 7.
  // 함수 정의
  const greet = (name: string, message: string = "Welcome") =>
    message + ", " + name;

  // 함수 호출
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}
{
  // 8.
  // 함수 정의
  const findMax = (nums: number[]): number => {
    return Math.max(...nums);
  };

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}
{
  // 9.
  // 함수 정의
  const double = (num: number): number => {
    return num * 2;
  };

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}
{
  // 10.
  // 함수 정의
  function getInfo(param: string): string;
  function getInfo(param: number): string;

  function getInfo(param: number | string): string {
    if (typeof param === "string") {
      return `Name: ${param}`;
    } else {
      return `Age: ${param}`;
    }
  }

  // 함수 호출
  const info1 = getInfo("Alice");
  const info2 = getInfo(30);
  console.log(info1);
  console.log(info2);
}
