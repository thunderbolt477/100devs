//--- Easy
//create a variable and assign it a number
let num = 100;

//minus 10 from that number
num = num - 10;
//print that number to the console
console.log(num);

//--- Medium
//create a variable that holds a value from the input
let x = Number(document.querySelector("#danceDanceRevolution").value);

//add 25 to that number
x = x + 25;

//alert that number
alert(x);

//--- Hard
//create a variable that holds the h1
let y = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables
y.addEventListener("click", () => {
  console.log(num + x);
});
