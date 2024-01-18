// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = "Christmas";
holiday = holiday.toUpperCase();
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let phrase = "Hello World";
console.log(phrase.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const sub = (a, b, c, d, e) => {
  let numTotal = a + b + c + d + e;
  return Math.abs(100 - numTotal);
};

sub(10, 20, 30, 40, 50);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const highLow = (a, b, c) => {
  let highNum = Math.max(a, b, c);
  let lowNum = Math.min(a, b, c);
  //   if (a > b && a > c) {
  //     highNum = a;
  //     if (b > c) {
  //       lowNum = c;
  //     } else {
  //       lowNum = b;
  //     }
  //   } else if (a > b && a < c) {
  //     // a is eliminated from highNum; a is greater than b but less than c
  //     highNum = c;
  //     lowNum = b;
  //   } else if (a < b && a > c) {
  //     highNum = b;
  //     lowNum = c;
  //   } else {
  //     lowNum = a;
  //     if (b > c) {
  //       highNum = b;
  //     } else {
  //       highNum = c;
  //     }
  //   }

  console.log(highNum, lowNum);
};
highLow(10, 20, 30);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const coinflip = () => {
  let num = Math.floor(Math.random() * 2);
  return num === 0 ? "Heads" : "Tails";
};

coinflip();

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

const coinflipCount = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(coinflip());
  }
};

coinflipCount(10);
