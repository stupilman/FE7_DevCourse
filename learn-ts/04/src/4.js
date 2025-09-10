{
  // class, 제네릭, 유틸리티, 조건부타입
  // class
  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      return `Hello, ${this.name}`;
    }
  }

  const person = new User("kisu", 20);
  console.log(person.greet());
}
