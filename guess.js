const prompt = require("prompt-sync")({sigint:true}); 
var number = Math.floor(Math.random() * 100) + 1;
console.log("This is a guess game written by JavaScript!");
console.log("Now, let's begin!");
console.log("You have 7 chances.");
console.log("The number is between 1 and 100 (include 1 and 100).\n");
var guessNumber = 0;
var count = 0;
while (guessNumber != number && count < 7) {
    console.log("---------------------------");
    guessNumber = prompt("Input your guess number:");
    if (guessNumber > number) 
        console.log("Your guess number is bigger!!!");
     else if (guessNumber < number) 
        console.log("Your guess number is smaller!!!");
     else 
        console.log("Your guess number is right!");
    count++;
    if (count == 7)
        console.log("You have no chances.\n");
    else
        console.log("You still have %d chances.\n", 7 - count);
}
if (count <= 3) 
    console.log("You only guess %d times, god!!!", count);
else if (count <= 7 && guessNumber == number) 
    console.log("You succeed after %d attempts, just so so.", count);
else 
    console.log("You fail it!!!");