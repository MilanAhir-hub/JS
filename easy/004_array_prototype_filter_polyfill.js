/**
 * Problem 004: Array.prototype.filter Polyfill
 * Difficulty: Easy
 * Domain: JS Core / Polyfills
 * Companies: Meta, Apple
 * 
 * Problem Description:
 * Implement `myFilter` polyfill on Array prototype that creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the test.
 * 
 * Example 1:
 * Input: [1, 2, 3, 4].myFilter(x => x % 2 === 0)
 * Output: [2, 4]
 * 
 * Key Requirements:
 * - Support `thisArg` parameter
 * - Do not mutate original array
 */

function myFilter(arr, callback) {
  let result = [];

  for(let i=0; i<arr.length; i++){
    if(callback(arr[i], i, arr)){
      result.push(arr[i]);
    }
  }

  return result;
}

// Test Cases
console.log(myFilter([1, 2, 3, 4], x => x % 2 === 0));

module.exports = { myFilter };
