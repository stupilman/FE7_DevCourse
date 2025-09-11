// 클래스
// 1. 타입시스템이 제공됨
// 2. 접근 제한자가 지원된다는 점
// 2.1 public, protected, private, readonly
// 2.2 자바스크립트에는 #private가 있지만, 그것과는 다른 것
// 3. 추상클래스, 인터페이스와 결합이 가능하다는 것
// 4. 메소드 오버라이딩 시, 오버라이딩 반환 값이 같아야 한다는 것

{
  // 클래스
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    start(name: string): string {
      return `${name}, start!`;
    }
  }

  const benz = new Car(100);
  console.log(benz.start("benz"));
  console.log(benz.speed);

  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    introduce(): string {
      return `Hello, ${this.name}, ${this.age}`;
    }
  }
  const person = new Person("john", 20);
  console.log(person.introduce());
}
{
  // public - 기본값, 클래스 내/외부/상속에서 접근 가능하게 합니다.
  // private - 클래스 내부에서만 접근 가능
  class Car {
    public speed: number;
    // speed: number; -> public은 붙여도 되고 안붙여도 됨
    constructor(speed: number) {
      this.speed = speed;
    }
    private secret() {
      return "차 사고 크게 난 적이 있음...";
    }
    search() {
      return this.secret();
    }
  }

  const car = new Car(100);
  console.log(car.speed);
  console.log(car.search());
}
{
  class Car {
    private engineOn: boolean = false;
    // 엔진 시작
    start() {
      if (this.engineOn) {
        console.log("Engine is already started");
        return;
      }
      this.engineOn = true;
      console.log("Engine started");
    }
    // 엔진 정지
    stop() {
      if (!this.engineOn) {
        console.log("Engine is already stopped");
        return;
      }
      this.engineOn = false;
      console.log("Engine stopped");
    }
    // 엔진 상태
    isEngineOn(): boolean {
      return this.engineOn;
    }
  }

  const benz = new Car();
  console.log(benz.isEngineOn());
  benz.start();
  benz.start();
  benz.stop();
  benz.stop();
}
{
  class Car {
    protected speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }
  class Benz extends Car {
    showSpeed() {
      console.log(this.speed);
    }
  }

  const benz = new Benz(100);
  benz.showSpeed();
}
{
  class Character {
    protected hp: number = 100;
  }
  class Warrior extends Character {
    attack() {
      this.hp -= 10;
      console.log(`HP after attack: ${this.hp}`);
    }
    displayWarriorInfo() {
      console.log(`Warrior HP: ${this.hp}`);
    }
  }
  const warrior = new Warrior();
  warrior.displayWarriorInfo();
  warrior.attack();
}
{
  // readonly
  // 한 번 값이 할당되면 수정 불가
  class Config {
    readonly apiUrl = "https://api.example.com"; // 초기 값이 없는 경우에는 첫 할당은 가능
    readonly appVersion = "v1.0";

    // constructor(apiUrl: string) {
    //   this.apiUrl = apiUrl;
    // }
    displayConfig() {
      console.log(`API_URL: ${this.apiUrl}, APP_VERSION: ${this.appVersion}`);
    }
  }

  const config = new Config();
  config.displayConfig();
}
{
  // 메소드 오버라이딩
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    getSpeed(): string {
      return `Car: ${this.speed}`;
    }
  }
  class Benz extends Car {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
    getSpeed(): string {
      return `Benz: ${this.speed}`;
    }
  }
  const benz = new Benz(100, "S Class");
  console.log(benz.getSpeed());
}
{
  // 추상클래스
  // 직접 인스턴스를 생성할 수 없는 클래스로,
  // 주로 공통의 속성이나 메서드를 정의하기 위해서 사용 (직접 구현도 가능)

  abstract class Animal {
    abstract makeSound(): void;
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log("Boww Woww");
    }
  }
  const dog = new Dog();
  dog.makeSound();
}
{
  // 직접 구현도 가능
  abstract class CarAbstract {
    // code: stirng = "1dfsaff";
    abstract name: string;
    abstract speed: number;
    abstract color: string;
    abstract maxSpeed(): number;
    start() {
      console.log("start");
    }
    stop() {
      console.log("stop");
    }
  }

  class Benz extends CarAbstract {
    name: string;
    speed: number;
    color: string;
    constructor(name: string, speed: number, color: string) {
      super();
      this.name = name;
      this.speed = speed;
      this.color = color;
    }
    maxSpeed(): number {
      return this.speed;
    }
  }
  const benz = new Benz("S", 200, "black");
  console.log(benz.maxSpeed());
}
{
  // 추상 클래스
  // 장점: 연결된 클래스에 공통의 속성과 메서드를 구현하도록 강제할 수 있다
  // 단점: 다른 클래스를 추가 상속하지 못하게 한다.

  // implements + interface(type)
  // 추상 클래스는 직접 구현이 가능하지만
  // implements는 직접 구현이 불가능
  type Runner = {
    name: string;
    run(): void;
  };

  interface Swimmer {
    swim(): void;
  }

  abstract class PersonAbstract {
    abstract stop(): void;
  }

  class Person extends PersonAbstract implements Runner, Swimmer {
    name: string;
    constructor(name: string) {
      super();
      this.name = name;
    }
    run(): void {
      console.log("Person is Running!");
    }
    swim(): void {
      console.log("Person is Swimming!");
    }
    stop(): void {}
  }
}
{
  type A = {
    a(): void;
  };
  type B = A & {
    b?(): void;
  };

  class X implements B {
    a(): void {}
  }
}
{
  // abstract
  // 상속의 개념을 그대로 활용하면서 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 가능)
  // implements
  // 상속과 별개로 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 불가능)
}
