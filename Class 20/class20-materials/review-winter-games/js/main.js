//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function newArr(arr) {
  // contains all even numbers from original arr
  let newArray = [];
  //   for (i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       newArray.push(arr[i]);
  //     } else {
  //       continue;
  //     }
  //   }
  arr.forEach((x) => {
    if (x % 2 === 0) {
      newArray.push(x);
    }
  });
  console.log(newArray);
}

newArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
