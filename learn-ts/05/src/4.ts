{
  // 유틸리티 타입 (기존에 존재하는 타입을 변형)
  // 제네릭을 기반으로 만들어짐
}
{
  // Partial<T>

  interface User {
    name: string;
    age: number;
    email: string;
  }

  interface NoAuthUser {
    name: string;
    age: number;
    email?: string;
  }

  const u1: User = {
    name: "kim",
    age: 20,
    email: "test@naver.com",
  };

  const u2: Partial<User> = {
    name: "park",
    age: 24,
  };

  // 예제 1: 일부 속성만 지정
  const user1: Partial<User> = { name: "John" };

  // 예제 2: age만 지정
  const user2: Partial<User> = { age: 30 };

  // 예제 3: name과 email만 지정
  const user3: Partial<User> = { name: "Alice", email: "alice@example.com" };

  // 예제 4: 모든 속성을 생략 가능
  const user4: Partial<User> = {}; // 모든 속성을 생략할 수 있음
}

{
  // Required<T>

  interface Guest {
    name?: string;
    age?: number;
    gender?: string;
    email?: string;
  }

  type User = Required<Guest>;

  // 예제 1: 모든 속성을 필수로 만듦
  const user1: Guest = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  // 예제 2: 속성 하나라도 빠지면 오류
  // const user2: Required<User> = { name: "Alice" };  // 오류: age와 email은 필수

  // 예제 3: 모든 속성이 필수
  // const user3: User = {
  //   name: "Bob",
  //   age: 40,
  //   email: "bob@example.com",
  // };

  // 예제 4: 속성 하나라도 빠지면 오류
  // const user4: Required<User> = { name: "Charlie", email: "charlie@example.com" };  // 오류
}

{
  // Pick<T, K>

  interface User {
    name: string;
    age: number;
    email: string;
  }

  type Guest = Pick<User, "name" | "email">;

  // interface Guest {
  //   name: string;
  // }

  // 예제 1: name과 email만 선택
  const user1: Pick<User, "name" | "email"> = {
    name: "John",
    email: "john@example.com",
  };

  // 예제 2: name만 선택
  const user2: Pick<User, "name"> = { name: "Alice" };

  // 예제 3: email과 age만 선택
  const user3: Pick<User, "email" | "age"> = {
    email: "alice@example.com",
    age: 25,
  };

  // 예제 4: age만 선택
  const user4: Pick<User, "age"> = { age: 40 };
}
