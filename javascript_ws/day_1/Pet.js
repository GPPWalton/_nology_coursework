// Goal: Write a program that simulates a day in the life of a virtual pet!
// You will set up the rules for how your pet behaves, and then run a sequence of events
// to see what happens.

// Requirements:
// Set up your pet's stats: Create variables for petName, energy, hunger, and happiness.
// Give them starting number values (e.g., 50). Note: For hunger, a higher number
// means they are more hungry!

// Simulate the Day: * At the very bottom of your code,
// call your functions in whatever order you want to create a story for the day.
// (e.g., check stats, feed, play, play again, sleep, check stats).
// Open your terminal and run your program!

const validateParam = param => {
    if (typeof param === "string" || typeof param === "number") {
        return param;
    } else {
        throw new Error(
            `invalid parameter type ${typeof param}, should be number or string`
        );
    }
};
class Pet {
    //default values if no parameters passed, only petName needs to be specified explicity
    constructor (petName, energy = 50, hunger = 50, happiness = 50) {
        try {
            this.petName = validateParam(petName);
            this.energy = validateParam(energy);
            this.hunger = validateParam(hunger);
            this.happiness = validateParam(happiness);
        } catch (error) {
            throw error;
        }
    }
}
const feed = pet => {
    // feed(): Should decrease hunger and increase energy.
    // Rule: Use an if/else statement to check if hunger is already less than 10.
    // If it is, console.log that the pet refuses to eat!
    if (pet.hunger < 10) {
        console.log(`${pet.petName} isn't hungry!`);
    } else {
        pet.hunger -= 10;
        pet.energy -= 10;
    }
};
const play = pet => {
    // play(): Should increase happiness and hunger, but decrease energy.
    // Rule: Use an if/else statement to check if energy is less than 20.
    // If it is, console.log that the pet is too tired to play.
    if (pet.energy > 20) {
        pet.happiness += 10;
        pet.hunger += 15;
        pet.energy -= 15;
    } else {
        console.log(`${pet.petName} is too tired to play...`);
    }
};
const sleep = pet => {
    // sleep(): Should greatly increase energy and slightly increase hunger.
    pet.energy += 50;
    pet.hunger += 5;
};
const checkStatus = pet => {
    // checkStatus(): Should console.log all of the pet's current stats so you can read them.
    console.log(
        `Name: ${pet.petName}\tEnergy: ${pet.energy}\tHunger: ${pet.hunger}\tHappiness: ${pet.happiness}`
    );
};

// const pet1 = new Pet("Bill", 100, 10, 60);
const pet1 = new Pet("Bill"); //has default values

//NOTE: these could also be methods
checkStatus(pet1);
feed(pet1);
play(pet1);
checkStatus(pet1);
feed(pet1);
play(pet1);
feed(pet1);
checkStatus(pet1);
sleep(pet1);
