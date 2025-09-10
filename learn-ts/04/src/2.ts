{
  // enum
  type MoveX = "left" | "right";

  function characterMoveX(direction: MoveX): void {
    if (direction === "left") {
      console.log("왼쪽으로 이동");
    }
    if (direction === "right") {
      console.log("오른쪽으로 이동");
    }
  }

  characterMoveX("left");
  characterMoveX("right");

  type Move = "left" | "right" | "up" | "down";
  function VehicleMove(direction: Move): void {
    if (direction === "left") {
      console.log("왼쪽으로 이동");
    }
    if (direction === "right") {
      console.log("오른쪽으로 이동");
    }
    if (direction === "up") {
      console.log("위쪽으로 이동");
    }
    if (direction === "down") {
      console.log("아래쪽으로 이동");
    }
  }
  VehicleMove("up");
  VehicleMove("down");
  VehicleMove("left");
  VehicleMove("right");
}
{
  // 이넘
  // 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입

  enum CharacterMoveX { // 방향
    LEFT,
    RIGHT,
  }

  enum RotationMoveX { // 회전
    LEFT,
    RIGHT,
  }

  function characterMoveX(direction: CharacterMoveX | RotationMoveX): void {
    if (direction === CharacterMoveX.LEFT) {
      console.log("왼쪽으로 이동");
    }
    if (direction === CharacterMoveX.RIGHT) {
      console.log("오른쪽으로 이동");
    }
  }

  characterMoveX(CharacterMoveX.LEFT);
  characterMoveX(CharacterMoveX.RIGHT);
  characterMoveX(RotationMoveX.LEFT);
  characterMoveX(RotationMoveX.RIGHT);
}
{
  // 숫자형 enum
  enum Direction {
    UP = 100,
    DOWN,
    LEFT,
    RIGHT,
  }

  console.log(Direction.UP);
}
{
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  function handleResponse(code: StatusCode) {
    switch (code) {
      case StatusCode.OK:
        return "성공";
      case StatusCode.BadRequest:
        return "실패";
      case StatusCode.Unauthorized:
        return "인증에러";
      case StatusCode.NotFound:
        return "찾을 수 없음";
    }
  }

  console.log(handleResponse(StatusCode.BadRequest));
}
{
  // 문자 enum(열거형)
  enum Direction {
    UP = "Up",
    DOWN = "Down",
    LEFT = "Left",
    RIGHT = "Right",
  }

  console.log(Direction.DOWN);
}
{
  // 혼합 enum(열거형)
  enum Mix {
    YES = 1,
    NO = "No",
  }

  enum Direction {
    UP = 200,
    DOWN = "UP",
    LEFT = 300,
    RIGHT = "DOWN",
  }
}
{
  // 리버스 매핑(역방향 매핑)
  // 숫자형 이넘에만 지원하는 개념
  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  console.log(Direction.UP);
  console.log(Direction[0]);
}
{
  enum Key {
    ArrowUp,
    ArrowDown,
  }

  function onKeyPressed(code: Key) {
    console.log("Pressed: " + Key[code]);
  }

  onKeyPressed(Key.ArrowDown);
  onKeyPressed(1);
}
{
  // const enum
  // 장점: 컴파일 과정에서의 코드 길이가 줄음
  // 단점: 역방향 매핑이 안됨

  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  const enum DirectionConst {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }
}
{
  // 객체 - interface (type)
  // 리터럴 타입 - enum (const enum)
  // 타입 별칭 - 유니온타입, 인터섹션

  const enum Role {
    Admin = "adim",
    Guest = "guest",
  }

  interface Account {
    id: number;
    role: Role;
  }

  type AuthAccount = Account & { token?: string };
}
