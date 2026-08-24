/**
 * Problem 005: Array.prototype.reduce Polyfill
 * Difficulty: Easy
 * Domain: JS Core / Polyfills
 * Companies: Amazon, Google, Meta
 * 
 * Problem Description:
 * Implement `myReduce` polyfill on Array prototype that executes a user-supplied reducer callback function on each element of the array.
 * 
 * Example 1:
 * Input: [1, 2, 3, 4].myReduce((acc, curr) => acc + curr, 0)
 * Output: 10
 * 
 * Key Requirements:
 * - Handle optional initialValue
 * - Throw TypeError on empty array with no initialValue
 */

// function myReduce(accumulator, currentValue) {

//   return function(callback, initialValue){
//     let accumulator = initialValue;
//     for(let i=0; i<this.length; i++){
//       accumulator = callback(accumulator, this[i]);
//     }

//     return accumulator;
//   }
// }

// const number = [1,2,3,4];

// number.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);

// // Test Cases
// // console.log(myReduce(/* test args */));

// module.exports = { myReduce };

Array.prototype.myReduce = function(callback, initialValue){
  let acc = initialValue;

  for(let i=0; i<this.length; i++){
    acc = callback(acc, this[i]);
  }

  return acc;
}

let arr = [10, 20, 30];

const result = arr.myReduce((acc, current) => {
  return acc + current;
}, 0);

console.log(result);