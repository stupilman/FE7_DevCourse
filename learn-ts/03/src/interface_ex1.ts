{
  // 1.
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "jeong",
    age: 20,
  };
}
{
  // 2.
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  const car: Car = {
    brand: "BNW",
    model: "XM5",
    start() {
      console.log("BOO~~");
    },
  };
}
{
  // 3.
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const emp1: Employee = {
    name: "kim",
    position: "coworker",
    department: "IT",
  };
}
{
  // 4.
  interface Team {
    name: string;
    members: string[];
  }

  const team: Team = {
    name: "IT",
    members: ["kim", "park"],
  };
}
{
  // 5.
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const shiba: Dog = {
    name: "kim",
    age: 10,
    breed: "Shiba",
  };
}
{
  // 6.
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }

  const person1: Person = {
    name: "kim",
    age: 20,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}
{
  // 7.
  interface Shape {
    area(): number;
  }
  interface Circle extends Shape {
    radius: number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  const circle: Circle = {
    radius: 3,
    area() {
      return this.radius * this.radius * Math.PI;
    },
  };

  const rect: Rectangle = {
    width: 3,
    height: 3,
    area() {
      return this.width * this.height;
    },
  };
}
{
  // 8.
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }

  interface Contact extends Person, Address {}

  const contact: Contact = {
    name: "kim",
    age: 20,
    street: "beberly",
    city: "Newyork",
    zipcode: 11123,
  };
}
{
  // 9.
  interface Dictionary {
    [key: string]: string;
  }

  const dict: Dictionary = {
    kim: "dddd",
    jeong: "dddds",
  };
}
{
  // 10.
  interface Operation {
    (a: number, b: number): number;
  }

  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a = 3, b = 6) => a - b;

  console.log(add(3, 7));
}
