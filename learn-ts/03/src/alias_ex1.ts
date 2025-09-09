{
  // 1.
  type Person = { name: string; age: number };

  const getPersonInfo = (person: Person) => {
    return person;
  };

  const person = { name: "kim", age: 30 };
  console.log(getPersonInfo(person));
}
{
  // 2.
  type Config = { host: string; port: number; ssl: boolean };

  function createConfig(val1: string, val2: number, val3: boolean): Config {
    return { host: val1, port: val2, ssl: val3 };
  }

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}
{
  // 3.
  type Rectangle = { width: number; height: number };

  const calculateArea = (rect: Rectangle): number => {
    return rect.width * rect.height;
  };

  const rect1 = { width: 10, height: 5 };
  console.log(calculateArea(rect1));
}
{
  // 4.
  type Student = { name: string; age: number; grades: number[] };

  function calculateAverageGrade(stu: Student): number {
    return stu.grades.reduce((acc, cur) => acc + cur, 0) / stu.grades.length;
  }

  const student1 = { name: "kim", age: 30, grades: [10, 35, 40, 70, 90] };
  console.log(calculateAverageGrade(student1));
}
{
  // 5.
  type Response = { status: string; data: string; message: string };

  const createResponse = (
    status: string,
    data: string,
    message: string
  ): Response => {
    return { status, data, message };
  };

  console.log(createResponse("success", "John", "fetch success"));
}
{
  // 6.
  type Employee = { id: string; name: string; position: string };

  const getEmployeeInfo: (emp: Employee) => string = (emp1) => {
    return `${emp1.name} works as a ${emp1.position} with ID: ${emp1.id}.`;
  };

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  );
}
{
  // 7.
  type Circle = { radius: number };

  const calculateCircumference = (rad: Circle): number => {
    return 2 * rad.radius * Math.PI;
  };

  console.log(calculateCircumference({ radius: 3 }));
}
{
  // 8.
  type Product = { name: string; price: number; inStock: boolean };

  function getDiscountedPrice(product: Product, sale: number): number {
    return product.price - product.price * 0.01 * sale;
  }
  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}
{
  // 9.
  type Book = { title: string; author: string; publishedYear: number };

  const getBookSummary = (book: Book) => {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
  };

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  );
}
{
  // 10.
  type Transaction = { id: string; amount: number; timestamp: string };

  const isValidTransaction = (trans: Transaction): boolean => {
    return trans.amount > 0;
  };

  console.log(isValidTransaction({ id: "1", amount: 10, timestamp: "today" }));
}
