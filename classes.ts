class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(): void {
        console.log(`Hello, ${this.greeting}`);
    }
}

let greeterInstance: Greeter = new Greeter("world");
greeterInstance.greet();

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters: number = 5): void {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters: number = 45): void {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam: Animal = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

class PersonClass {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends PersonClass {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch(): string {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard: Employee = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());

class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {}
}

let octo: Octopus = new Octopus("Octo with the 8 strong legs");

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: { x: number; y: number; }): number {
        let xDist: number = (point.x - Grid.origin.x);
        let yDist: number = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1: Grid = new Grid(1.0);  // 1x scale
let grid2: Grid = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

abstract class Department {

    constructor(public name: string) {}

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();

class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet(): string {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter2.standardGreeting;
        }
    }
}

let greeter1: Greeter2;
greeter1 = new Greeter2();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
console.log(greeter1.greet());
