// *Variables*
// Create a variable and console log the value
let name = "Tim";
console.log(name);

// Create a variable, add 10 to it, and alert the value
let num = 10;
alert(num + 10);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a) {
  alert(a - 4);
}

// Create a function that divides one number by another and returns the remainder
function calc(a, b) {
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
