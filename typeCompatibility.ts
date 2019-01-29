interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;

function greet(n: Named) {
    console.log("Hello, " + n.name);
}

greet(y); // OK

let fnX = (a: number) => 0;
let fnY = (b: number, s: string) => 0;

fnY = fnX; // OK
// fnX = fnY; // Error

