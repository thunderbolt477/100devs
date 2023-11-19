// *Variables*
// Create a variable and console log the value
let a = 10;
console.log(a);

// Create a variable, add 10 to it, and alert the value
let b = 20;
alert(b + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const sub = (a, b, c, d) => {
  alert(a - b - c - d);
};

// Create a function that divides one number by another and returns the remainder
function divides(a, b) {
  return a % b;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a, b) {
  if (a + b > 50) {
    alert("Jumanji");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a, b, c) {
  if ((a * b * c) % 3 === 0) {
    alert("ZEBRA");
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loop(a, b) {
  for (let i = 0; i < b; i++) {
    console.log(a);
  }
}
