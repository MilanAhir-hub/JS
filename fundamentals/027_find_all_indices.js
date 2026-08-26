/**
 * Problem 027: Find All Index Occurrences
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (indexOf(), push())
 * 
 * Problem Description:
 * Write a function `findAllIndices(arr, target)` that collects all indices of `target` in `arr` using `indexOf()` in a loop.
 * 
 * Example:
 * Input: findAllIndices([1, 2, 3, 2, 4, 2], 2)
 * Output: [1, 3, 5]
 * 
 * Key Requirements:
 * - Use `indexOf()` to jump to next occurrence
 * - Collect indices in array
 */

function findAllIndices(arr, target) {
  let result = [];

  for(let i=0; i<arr.length; i++){
    if(arr[i] === target){
      result.push(i);
    }
  }

  return result;
}

// Test Cases
console.log(findAllIndices([1, 2, 3, 2, 4, 2], 2)); // Expected output: [1, 3, 5]

module.exports = { findAllIndices };
