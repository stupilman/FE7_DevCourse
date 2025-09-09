{
  // 타입 별칭 (Type Alias)
  // 나만의 커스텀 타입을 만들 수 있는 방법을 제공한다.

  type Person = {
    name: string;
    age: number;
    gender?: string;
  };

  const user1: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };

  const user2: Person = {
    name: "park",
    age: 30,
    gender: "male",
  };

  const user3: Person = {
    name: "jeong",
    age: 25,
    gender: "male",
  };
}
{
  // 1. 기본 타입 별칭
  type StringId = string;
  type NumberId = number;
  const userId: StringId = "teacher-kim";
  const productId: NumberId = 1;
}
{
  // 객체 타입 별칭
  type User = {
    name: string;
    readonly age?: number;
  };

  type Person = {
    [key: string]: string | number;
  };

  const per1: User = {
    name: "kim",
    age: 20,
  };
}
{
  // 3. 함수 타입 별칭
  type AddFun = (a: number, b: number) => number;
  type AddFun2 = { (a: number, b: number): number };
  const add: AddFun = (a, b) => a + b;
}
{
  // 4. 튜플 타입 별칭
  type Point = [number, number];
  const point: Point = [10, 20];
}
{
  // 5. 인터섹션(유니온) 타입 별칭(타입 확장)
  type StringId = string;
  type NumberId = number;
  type Id = StringId | NumberId;

  type Nameable = {
    name: string;
  };

  type Ageable = {
    age: number;
  };

  type Person = Nameable & Ageable;
}
{
  // 6.
  type Direction = "UP" | "RIGHT" | "LEFT" | "DOWN";
  const direct: Direction = "LEFT";
}
