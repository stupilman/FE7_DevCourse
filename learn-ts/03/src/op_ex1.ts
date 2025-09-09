{
  // 1.
  const printValue = (param: string | number): void => console.log(param);

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}
{
  // 2.
  const doubleOrLength = (param: string | number) => {
    if (typeof param === "string") return param.length;
    if (typeof param === "number") return param * 2;
    return "Invalid Types";
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}
{
  // 3.
  const mergeObjects = (
    person: { name: string; age: number },
    employee: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => {
    return { ...person, ...employee };
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}
{
  // 4.
  const getFirstElement = (
    param: number[] | string[]
  ): number | string | undefined => {
    if (param.length === 0) return undefined;
    return param[0];
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}
{
  // 5.
  const isEqual = (el1: string | number, el2: string | number): boolean => {
    return el1 == el2;
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}
{
  // 6.
  const updateAddress = (
    el1: { name: string; age: number },
    el2?: string
  ):
    | {
        name: string;
        age: number;
      }
    | {
        el2: string;
        name: string;
        age: number;
      } => {
    if (el2) return { ...el1, el2 };
    return el1;
  };

  const updatedPerson = updateAddress(
    { name: "Jane", age: 28 },
    "123 Maple St"
  );
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
  console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}
{
  // 7.
  const maxValue = (el1: string | number, el2: string | number) => {
    if (typeof el1 === "number" && typeof el2 === "number") {
      return Math.max(el1, el2);
    }
    if (typeof el1 === "string" && typeof el2 === "string") {
      return el1.length > el2.length ? el1 : el2;
    }
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}
{
  // 8.
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(value: number): string;
  function getValue(value: string): string;
  function getValue(value: number | string): string {
    if (typeof value === "number") return value.toString();
    return value;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}
{
  // 9.
  const createContact = (
    person: { name: string; age: number },
    contact: { email: string }
  ) => {
    return { ...person, ...contact };
  };

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}
{
  // 10.
  const getAge = (param: string | number) => {
    if (typeof param === "string") return Number(param);
    return param;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
