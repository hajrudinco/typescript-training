interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };

printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
    // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };

    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({ color: "black" });
let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
//let mySquare3 = createSquare({ width: 100, opacity: 0.5 }); // object literal has to have only known properties, include propName in config

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };

let ro: ReadonlyArray<number> = [1, 2, 3, 4];
console.log(ro);

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

console.log(mySearch('Test', 'es'));
console.log(mySearch('Test', 'es6'));

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);


interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}


interface ClockConstructor {
    new (hour: number, minute: number): ClockInterfaceTick;
}

interface ClockInterfaceTick {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterfaceTick {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterfaceTick {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterfaceTick {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

console.log(square);


class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

console.log(c);
