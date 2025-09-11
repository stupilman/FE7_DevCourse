{
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }

  // enum
  enum Direction {
    UP, // 0
    DOWN, // 1
  }

  enum Direction {
    RIGHT = 2, // 0
    LEFT = 3, // 1
  }

  console.log(Direction.LEFT);
}
{
  // 조건부 타입
  // T extends U ? X : Y

  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"
}
{
  type MyType = "a" | "b" | "c";

  // 예제 1 : "b"를 제외한 나머지 타입 반환
  type Result = Exclude<MyType, "b">; // "a" | "c"
}
{
  // type Exclude<"a" | "b" | "c", "b"> = "a" | "b" | "c" extends "b" ? never : T
  // | "a" extends "b"
  // | "b" extends "b"
  // | "c" extends "b"

  // "a | "c"
  type MyExclude<T, U> = T extends U ? never : T;
  type MyType = "a" | "b" | "c";
  type Result = MyExclude<MyType, "b">; // "a" | "c"
}
