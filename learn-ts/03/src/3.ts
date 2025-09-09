{
  // 인터페이스
  // '객체'의 타입을 지정할 때 사용하는 타입 지정 방법
  // interface
  // type 식별자 = 할당
  // interface 식별자 { }

  interface Person {
    name: string;
    age: number;
    gender: "male" | "female" | "natural";
  }

  const person: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };
}
{
  type Gender = "male" | "female" | "natural";

  interface Person {
    name: string;
    age: number;
    gender: Gender;
  }

  const person: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };
}
{
  interface Person {
    name: string;
    age: number;
    greet(message: string): void;
  }

  const person: Person = {
    name: "kim",
    age: 20,
    greet(message) {
      console.log(`${message}, ${this.name}`);
    },
  };
}
{
  // 자동 병합
  interface Person {
    name: string;
  }

  interface Person {
    age: number;
  }

  const person: Person = {
    name: "kim",
    age: 30,
  };
}
{
  interface Person {
    [key: string]: string | number;
  }

  const person: Person = {
    name: "kim",
    age: 20,
  };
}
{
  // 상속
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    skill: string;
  }

  const developer: Developer = {
    name: "kim",
    age: 20,
    skill: "JS",
  };
}
{
  // 다중 인터페이스 상속
  interface Flyer {
    fly?(): void;
  }
  interface Swimmer {
    swim?(): void;
  }
  interface Bird extends Flyer, Swimmer {
    sound(): void;
  }

  const bird: Bird = {
    sound() {
      console.log("dooo");
    },
  };
}
{
  interface AddFn {
    (a: number, b: number): number;
  }

  const add: AddFn = (a, b) => a + b;
}
