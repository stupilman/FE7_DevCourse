{
  // class
  // 1. 타입 시스템이 추가되었음
  class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): string {
      return `Hello, ${this.name}`;
    }
  }

  const person = new User("kisu", 20);
  console.log(person.greet());
}
{
  // 2. 접근 제어자 (public, protected, private, readonly)
  // 2.1 public - 누구나 접근 가능(인스턴스 외부, 클래스 내부, 상속 클래스 등등), default 값
  // 2.2 private - 클래스 내부에서마 접근 가능(외부x, 상속x)
  // 2.3 protected - 클래스 외부에서만 접근 불가능, (클래스 내부o, 상속o)
  // 2.4 readonly - 읽기 전용, 값 변환 불가능
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  class Benz extends Car {
    printSpeed(): void {
      console.log(this.speed);
    }
  }

  const benz = new Benz(100);
  benz.printSpeed();
}
