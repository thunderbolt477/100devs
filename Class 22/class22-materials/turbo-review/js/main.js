// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = "water";

console.log(drink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let appleTree = "there once was an apple tree in the middle of a forest.";
let result = appleTree.includes("apple");

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rps = () => {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function game(choice) {
  let computer = rps();
  if (choice === computer) {
    return "Draw";
  } else if (
    (choice === "rock" && computer === "paper") ||
    (choice === "paper" && computer === "scissors") ||
    (choice === "scissors" && computer === "rock")
  ) {
    return "You lose";
  } else {
    return "You win";
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
["rock", "paper", "scissors"];
function gameChoice(arr) {
  arr.forEach((x) => console.log(game(x)));
}
