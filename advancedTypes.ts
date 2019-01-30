interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function getSmallPet(): Fish | Bird {
    let bird : Bird = {
        fly: () => {},
        layEggs: () => console.log('Laying eggs...'),
    };

    return bird;
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// Type is 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // type narrowed to 'StringPadder'
}

function fixed(name: string | null): string {
    function postfix(epithet: string) {
      return name!.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
}

fixed(null);

type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy");

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}

type LinkedList<T> = T & { next: LinkedList<T> };

interface IPerson {
    name: string;
}

let people: LinkedList<IPerson>;
// let s = people.name;
// let s = people.next.name;
// let s = people.next.next.name;
// let s = people.next.next.next.name;

function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
    return 3;
}

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
interface Triangle {
    kind: "triangle";
    a: number;
    b: number;
    c: number;
}

type Shape = Square | Rectangle | Circle | Triangle;

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

function area(s: Shape): number {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        case "triangle":
            let p = (s.a + s.b + s.c)/2;
            return Math.sqrt(p * (p - s.a) * (p - s.b) * (p - s.c));
        default: return assertNever(s);
    }
}

console.log(area({ kind: "triangle", a: 17, b: 22, c: 23 }));

class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        console.log(`${(<any>this).constructor.name}: ${this.value}`);
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

let basicCalc = new BasicCalculator(2).multiply(5).add(1).currentValue();

class ScientificCalculator extends BasicCalculator {
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}

let sciCalc = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person2 {
    name: string;
    age: number;
}
let person: Person2 = {
    name: 'Person 2',
    age: 144
};

let strings: string[] = pluck(person, ["name"]); // ok, string[]
let personProps: keyof Person2; // 'name' | 'age'
let strings2 = pluck(person, ["name", "age"]); // ok, (string | number)[]

// function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//     return o[name]; // o[name] is of type T[K]
// }

// let nameProp: string = getProperty(person, "name");
// let ageProp: number = getProperty(person, "age");
// let unknown = getProperty(person, "unknown"); // error, 'unknown' is not in 'name' | 'age'

interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number>; // string
let value: Map<number>['foo']; // number

type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P];
}
type PartialType<T> = {
    [P in keyof T]?: T[P];
}

type PersonPartial = Partial<Person2>;
type ReadonlyPerson = Readonly<Person2>;

type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };

type NullablePerson = { [P in keyof Person2]: Person2[P] | null }
type PartialPerson = { [P in keyof Person2]?: Person2[P] }

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}

function proxify<T>(o: T): Proxify<T> {
    let proxy = {};
    for (let key of Object.keys(o)) {
        (<any>proxy)[key] = {
            get: () : string => {
                console.log(`GET: ${key}`);
                return (<any>o)[key];
            },
            set: (value: string) : void => {
                console.log(`SET: ${key}`);
                (<any>o)[key] = value;
            },
        };
    };

    return <Proxify<T>>proxy;
}

let props: Person2 = {
    name: 'Person 2',
    age: 144
};

let proxyProps = proxify(props);
proxyProps.name.set('Test');
proxyProps.age.get();

declare function f<T extends boolean>(x: T): T extends true ? string : number;

// Type is 'string | number
// let stringOrNum = f(Math.random() < 0.5)

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<"a">;  // "string"
type T2 = TypeName<true>;  // "boolean"
type T3 = TypeName<() => void>;  // "function"
type T4 = TypeName<string[]>;  // "object"

type T10 = TypeName<string | (() => void)>;  // "string" | "function"
type T12 = TypeName<string | string[] | undefined>;  // "string" | "object" | "undefined"
type T11 = TypeName<string[] | number[]>;  // "object"

type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

type T20 = Boxed<string>;  // BoxedValue<string>;
type T21 = Boxed<number[]>;  // BoxedArray<number>;
type T22 = Boxed<string | number[]>;  // BoxedValue<string> | BoxedArray<number>;
