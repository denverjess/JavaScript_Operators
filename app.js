//let a = 20;
//let b = 4;
//let add = a + b;
//let minus = a - b;
//let multiply = a * b;
//let divide = a / b;

//console.log(add);
//console.log(minus);
//console.log(multiply);
//console.log(divide);

//------------------------------

// let a = 11;
// let str = "11";
// let str2 = "eleven";
// let isPresent = true;
// let firstName = "Jackie";
// let lastName = "Chan";

//console.log(a + str);
//console.log(a + str2);
//console.log(a + isPresent);
//console.log(a + firstName);
//console.log(a + lastName);

//--------------------------------

let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log(d == str3);
console.log(d === str3)
console.log(!isPresent2)
console.log("eleven" == str4 && d >= str3)
console.log(!isPresent2 || isPresent2)
console.log(0 == false);
console.log(0 === false);
console.log(0 != false);
console.log(0 !== false);

//--------------------------------
console.log(0 / 50);
console.log(50 / 0);
console.log(8 % 10);
console.log(" ");
console.log("Selection Statements:")

//------------------------------------------
//Selection statements

//exercise 1

let rand = 37;
let userInput = window.prompt("Guess a number between 1 and 100.");

if (userInput < rand) {
    alert("Too low!");
}

else if (userInput > rand) {
    alert("Too High!");
}

else {
    alert("Congrats! You guessed the correct number!");
}

console.log(" ")
//---------------------

//exercise 2

let userInput2 = window.prompt("What's the weather like where you are?")
                    .toLowerCase();
switch (userInput2) {
    case "sunny":
        alert("Nice! Don't forget your SPF!");
        break;
    case "cloudy":
        alert("Cloudy days are great for taking photos outside.");
        break;
    case "rainy":
    case "raining":
    case "rain":
        alert("Rainy days are the best. Go splash in some puddles!");
        break;
    case "snow":
    case "snowy":
    case "snowing":
        alert("Do you wanna build a snowman?");
        break;
    case "tornado":
        alert("Get to the storm cellar!!!");
        break;
    default:
        alert("You must not live where I live!");    




}
