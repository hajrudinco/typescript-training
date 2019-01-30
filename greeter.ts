interface GreeterPerson {
    firstName: string;
    lastName: string;
}

/**
 * Best class ever.
 */
class Developer {
    /** This is some property description */
    fullName: string;

    /**
     * Testing the docstrings.
     * @param firstName This is first name
     * @param lastName This is last name
     */
    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
}

/**
 * console.log - greets the person.
 * @param person 
 */
function greeter(person: GreeterPerson) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
}

const user = new Developer('Hajrudin', 'Coralic');

greeter(user);
