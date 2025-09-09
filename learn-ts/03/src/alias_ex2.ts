{
  // 1.

  type Type = string;
  type Payload = number | string | { id: number; name: string };

  type Action = {
    type: Type;
    payload: Payload;
  };

  // code
  function createAction(type: Type, payload: Payload): Action {
    return { type, payload };
  }

  // 함수 호출 예시
  const action1 = createAction("ADD_ITEM", { id: 1, name: "item" });
  const action2 = createAction("UPDATE_ITEM", 42);
  const action3 = createAction("SET_STATUS", "success");

  console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
  console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
  console.log(action3); // { type: 'SET_STATUS', payload: 'success' }}
}
{
  // 2.

  type NumberOrString = string | number;
  type Result = { id: NumberOrString; name: NumberOrString };

  const createObject = (id: NumberOrString, name: NumberOrString): Result => {
    return { id, name };
  };

  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}
{
  // 3.

  type Point = { x: number[]; y: number[] };

  const cacluateDistance = (point: Point) => {
    if (point.x[0] && point.x[1] && point.y[0] && point.y[1]) {
      const distance =
        Math.pow(point.x[0] - point.y[0], 2) +
        Math.pow(point.x[1] - point.y[1], 2);
      return Math.sqrt(distance);
    }
  };

  console.log(cacluateDistance({ x: [3, 1], y: [1, 3] }));
}
{
  // 4.

  type FetchResult =
    | { status: "loading" }
    | { status: "success"; data: string }
    | { status: "error"; message: string };

  function fetchData() {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
      return { status: "loading" };
    } else if (random === 1) {
      return { status: "success", data: "Data loaded successfully!" };
    } else {
      return { status: "error", message: "Failed to load data." };
    }
  }

  const result1 = fetchData();
  const result2 = fetchData();
  const result3 = fetchData();

  console.log(result1);
  console.log(result2);
  console.log(result3);
}
{
  // 5. 어떻게 푸는지 모르겠음
  // type NullOrUndefined = null | undefined;
  // function getValue(data) : boolean {
  //   if(typeof data === NullOrUndefined)
  // }
}
{
  // 6.

  type Coordinates = [number, number];
  const setCoordinates = (x: number, y: number): Coordinates => {
    return [x, y];
  };
}
{
  // 7.

  type Person = {
    readonly name: string;
    readonly age: number;
  };

  function createPerson(name: string, age: number): Person {
    return { name, age };
  }

  const person = createPerson("John", 30);

  // person 객체의 속성은 변경할 수 없도록 해야 합니다.
  // person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
  console.log(person); // { name: 'John', age: 30 }
}
{
  // 8.

  type User = {
    readonly id: string;
    name: string;
    email: string;
  };
  type UpdateUserInput = {
    name?: User["name"];
    email?: User["email"];
  };

  function updateUser(user: User, change: UpdateUserInput): User {
    return { ...user, ...change };
  }

  const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
  const updatedUser1 = updateUser(user1, { name: "Alicia" });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}
{
  // 9.
  type Role = "admin" | "user";
  type User = { id: "1"; name: "Alice"; role: "user" };

  const assignRole = (user: User, role: Role) => {
    return { ...user, role };
  };

  const user1: User = { id: "1", name: "Alice", role: "user" };
  const updatedUser = assignRole(user1, "admin");

  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}
{
  // 10.
  type Primitive = string | number;

  function filterString(param: Primitive) {
    if (typeof param === "string") return param;
    else throw new Error("Not a string");
  }

  const stringValue = filterString("Hello");
  console.log(stringValue); // 'Hello'

  const numberValue = filterString(123); // Error: Not a string
  console.log(numberValue);
}
