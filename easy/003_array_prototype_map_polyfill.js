/**
 * Problem 003: Array.prototype.map Polyfill
 * Difficulty: Easy
 * Domain: JS Core / Polyfills
 * Companies: Amazon, Microsoft
 * 
 * Problem Description:
 * Implement `myMap` polyfill on Array prototype that creates a new array populated with the results of calling a provided function on every element.
 * 
 * Example 1:
 * Input: [1, 2, 3].myMap(x => x * 2)
 * Output: [2, 4, 6]
 * 
 * Key Requirements:
 * - Support `thisArg` parameter
 * - Skip unassigned array indices
 */

function myMap(arr, callback) {
   let result = [];

   for(let i=0; i<arr.length; i++){
    result.push(callback(arr[i], i, arr));
   }

   return result;

}

let numbers = [1,2,3,4];

let doubled = myMap(numbers, (n) => n*2);

console.log(doubled);


// Test Cases
// console.log(myMap(/* test args */));

module.exports = { myMap };
