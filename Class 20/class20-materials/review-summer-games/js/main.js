//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function Multiply(arr) {
  let product = 1;
  //   for (i = 0; i < arr.length; i++) {
  //     product *= i;
  //   }
  arr.forEach((num) => {
    product *= num;
  });
  alert(product);
}

Multiply([1, 2, 3, 4, 10]);
// let total = 1
// const multiplyv2((arr.forEach(value) => {
//     total *= i

// }
// ))
