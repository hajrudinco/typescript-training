/** Basic types module */

let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 10]; 

enum Color { Red, Green, Blue }
let greenColor: Color = Color.Green;
let colorName: string = Color[2];

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

function warnUser(): void {
    console.log("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {}
}

declare function create(o: object | null): void;
