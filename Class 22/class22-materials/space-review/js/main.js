//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [10, 20, 30, 41, 50];

function total(arr) {
  let sum = arr.reduce((x, y) => x + y, 0);
  console.log(sum);
}
total(arr);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr) {
  let squaredTotal = arr.map((x) => x ** 2);
  return squaredTotal;
}
console.log(squared(arr));

//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello world"));
//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(str) {
  reversedString = str.split("").reverse().join("");
  if (str === reversedString) {
    console.log("PALINDROME");
  }
}

palindrome("racecar");
