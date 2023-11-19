// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food;
food = "grilled meat";
alert(food);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = "hello, my name is tim";
alert(str.slice(1, 2));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(a, b, c) {
  alert((a / b) * c);
}

threeNums(1, 2, 3);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneNum(a) {
  console.log(Math.cbrt(a));
}

oneNum(1500);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function vacation(month) {
  if (
    month.toLowerCase() === "june" ||
    month.toLowerCase() === "july" ||
    month.toLowerCase() === "august"
  ) {
    alert("YAY");
  } else {
    alert("booo");
  }
}
vacation("June");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(num) {
  for (i = 1; i < num; i++) {
    if (i % 5 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
}

skipFive(29);
