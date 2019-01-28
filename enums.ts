enum DirectionNumber {
    Up,
    Down,
    Left,
    Right,
}

enum DirectionString {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let circle: Circle = {
    kind: ShapeKind.Circle,
    radius: 100,
}

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

console.log('Enum examples...');

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions);

let directions2 = [DirectionString.Up, DirectionString.Down];
console.log(directions2);
