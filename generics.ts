function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("myString"));
console.log(identity<number>(123));
console.log(identity("myString"));

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

loggingIdentity([1, 2, 3]);

interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity2([1, 2, 3]);
loggingIdentity2({ length: 1231 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let example = { a: 1, b: 2, c: 3, d: 4 };

getProperty(example, "a"); // okay

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal2 {
    numLegs: number;
}

class Bee extends Animal2 {
    keeper: BeeKeeper;
}

class Lion extends Animal2 {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal2>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask; 
