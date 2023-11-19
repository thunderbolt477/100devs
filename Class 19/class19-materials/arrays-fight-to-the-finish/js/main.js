//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["shawshank redemption", "moneyball", "initial d"];

movies.forEach((x) => (document.querySelector("h2").innerText += x + " "));

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.forEach((x, i) => (nums[i] = x + 3));
console.log(nums);

//Find the average of all the numbers from question three
let total = 0;
nums.forEach((x) => (total += x));
console.log(total);
total = total / nums.length;
console.log(total);
