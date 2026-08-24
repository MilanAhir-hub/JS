/**
 * Problem 001: Push Single and Multiple Elements
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (push())
 * 
 * Problem Description:
 * Write a function `appendElements(arr, ...items)` that appends given items to the end of an array using `push()` and returns the updated array.
 * 
 * Example:
 * Input: appendElements([1, 2], 3, 4)
 * Output: [1, 2, 3, 4]
 * 
 * Key Requirements:
 * - Must use Array.prototype.push()
 * - Return the mutated array
 */

function appendElements(arr, ...items) {
  
  arr.push(...items);
  return arr;

}

// Test Cases
console.log(appendElements([1, 2], 3, 4)); // Expected output: [1, 2, 3, 4]

module.exports = { appendElements };
