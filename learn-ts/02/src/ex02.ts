{
  // 1.
  // 함수 정의
  const sumAllNumbers = (...nums: number[][]) => {
    const newArr = nums.map((arr) => arr.reduce((acc, cur) => acc + cur), 0);
    return newArr;
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}
{
  // 2.
  // 함수 정의
  const doubleValue = (el: number | string) => {
    if (typeof el === "number") return el * 2;
    else return el.length * 2;
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}
{
  // 3.
  // 함수 정의
  // 함수 정의
  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
    const minLength = Math.min(arr1.length, arr2.length);
    const newArr: number[] = [];

    for (let i = 0; i < minLength; i++) {
      newArr.push(arr1[i]! * arr2[i]!);
    }

    return newArr;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}
{
  // 4.
  // 함수 정의
  const intersection = (...arr: number[][]) => {
    return arr[0]?.filter((v) => {
      return arr[1]?.indexOf(v) !== -1;
    });
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}
{
  // 5.
  // 함수 정의
  const formatInfo = (obj: { name?: string; age?: number }) => {
    if (obj.name) {
      return `Name: ${obj.name}`;
    } else {
      return `Age: ${obj.age}`;
    }
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"
  const info2 = formatInfo({ age: 30 });
  console.log(info2); // "Age: 30"
}
{
  // 6.
  // 함수 정의
  const combineStrings: (str1: string, str2: string) => string = (
    str1,
    str2
  ) => {
    return `${str1}${str2}`;
  };

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}
{
  // 7.
  // 함수 정의
  const squareArray: (numArr: number[]) => number[] = (numArr) => {
    return numArr.map((v) => v ** 2);
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}
{
  // 8.
  // 함수 정의
  const addStringAndNumber = (str: string, num: number) => {
    return `${str}${num}`;
  };

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}
{
  // 9.
  // 함수 정의
  const compareValues: (num: number, str: string) => string = (num, str) => {
    const strLength = str.length;

    if (strLength > num) {
      return `String is larger`;
    } else return `Number is larger`;
  };

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}
{
  // 10.
  // 함수 정의
  const checkValue = (param: number | string | boolean) => {
    if (typeof param === "number") {
      return `It's a number`;
    } else if (typeof param === "string") {
      return `It's a string`;
    } else {
      return `It's a boolean`;
    }
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
