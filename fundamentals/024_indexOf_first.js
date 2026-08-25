/**
 * Problem 024: Find Index of Element
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (indexOf())
 * 
 * Problem Description:
 * Write a function `findIndex(arr, target)` that returns the index of first occurrence of `target` using `indexOf()`.
 * 
 * Example:
 * Input: findIndex(["a", "b", "c", "b"], "b")
 * Output: 1
 * 
 * Key Requirements:
 * - Must use `indexOf()`
 * - Return -1 if target not found
 */

// function findIndex(arr, target) {
//   // Write your solution here

//   return arr.indexOf(target);
// }

function findIndex(arr, target){
  for(let i=0; i<arr.length; i++){
    if(arr[i] === target){
      return i;
    }
  }

  return -1;
}

// Test Cases
console.log(findIndex(["a", "b", "c", "b"], "b")); // Expected output: 1
 
module.exports = { findIndex };
