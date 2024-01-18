//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let arr = ["1", "2", "3", "4", "5"];

arr.forEach((x) => {
  console.log(x);
});
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNums = (arr) => arr.filter((x) => x % 2 === 0);
console.log(evenNums(nums));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

let newNums = [8, 1, 4, 2, 7, 3, 6, 5];

function addSeconds(arr) {
  let sortedArr = arr.sort();
  let total = parseInt(sortedArr.slice(-2)) + parseInt(sortedArr[1]);
  return total;
}

console.log(addSeconds(newNums));
