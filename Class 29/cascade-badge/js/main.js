//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

const reverses = (arr) => {
  console.log(arr.reverse());
};

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function larger(arr1, arr2) {
  const squared = arr1.reduce((acc, current) => acc + current ** 2, 0);
  const cubed = arr2.reduce((acc, current) => acc + current ** 3, 0);
  console.log(squared);
  console.log(cubed);
  return squared > cubed;
}

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

const isIndex = (arr) => {
  return arr.filter((e, i) => e % i === 0);
};

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

const filteringNums = (arr) => {
  return arr.reduce((acc, c) => acc + Number(c), 0);
};

console.log(larger([4, 5, 6], [1, 2, 3]));
console.log(isIndex([22, -6, 32, 82, 9, 25]));
console.log(filteringNums(["10", 1, 2, 3, "20"]));
