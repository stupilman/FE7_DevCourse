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
