namespace IteratorsAndGenerators {
    let someArray: any[] = [1, "string", false];

    for (let entry of someArray) {
        console.log(entry); // 1, "string", false
    }

    let list: number[] = [4, 5, 6];

    for (let i in list) {
        if (list.hasOwnProperty(i)) {
            console.log(i); // "0", "1", "2",
        }
    }

    for (let i of list) {
        console.log(i); // "4", "5", "6"
    }

    let pets: Set<string> = new Set(["Cat", "Dog", "Hamster"]);
    (<any>pets).species = "mammals";

    for (let pet in pets) {
        if (pets.hasOwnProperty(pet)) {
            console.log(pet); // "species"
        }
    }

    for (let pet of pets) {
        console.log(pet); // "Cat", "Dog", "Hamster"
    }
}
