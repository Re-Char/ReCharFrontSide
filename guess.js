// const prompt = require("prompt-sync")({sigint:true}); 
var number = Math.floor(Math.random() * 100) + 1;
window.alert("This is a guess game written by JavaScript!\nNow, let's begin!\nYou have 7 chances.\nThe number is between 1 and 100 (include 1 and 100).");
var guessNumber = 0;
var count = 0;
while (count < 7) {
    guessNumber = prompt("Input your guess number:");
    count++;
    if (guessNumber > number)
        window.alert(`Your guess number is bigger!!!\nYou still have ${7 - count} chances.`);
    else if (guessNumber < number)
        window.alert(`Your guess number is smaller!!!\nYou still have ${7 - count} chances.`);
    else {
        window.alert("Your guess number is right!!!");
        break;
    }
}
if (count <= 3) 
    window.alert(`You only guess ${count} times, god!!!`);
else if (count <= 7 && guessNumber == number) 
    window.alert(`You succeed after ${count} attempts, just so so.`);
else 
    window.alert("You fail it!!!");