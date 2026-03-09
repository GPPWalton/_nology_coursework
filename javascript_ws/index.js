const myAge = 30;

let myName = "Gabriel";

var jobRole = "Student"; //Don't use var, not really used nowadays/legacy option

let nameAndJobRole = myName + jobRole;

let isAdmin = false;

// if (myAge === 3) {
//     console.log("condition 1 is true");
// } else if (myAge > 20) {
//     console.log("condition 2 is true");
// } else {
//     console.log("all conditions are false");
// }

const addTwoNumbers = (firstNum, secondNum) => {
    if (typeof firstNum === "number" && typeof secondNum === "number") {
        return firstNum + secondNum;
    } else {
        if (typeof firstNum !== "number" && typeof secondNum === "number") {
            return new Error("parameters are invalid datatypes");
        } else if (typeof firstNum !== "number") {
            return new Error("first number is an invalid input type");
        } else {
            return new Error("second number is an invalid input type");
        }
    }
};

const createFullName = (firstName, secondName) => {
    return `${firstName} ${secondName}`;
};
console.log(createFullName("Gabriel", "Walton"));

const result = addTwoNumbers("1", "2");
if (result === Error) {
    throw result;
} else {
    console.log(result);
}
