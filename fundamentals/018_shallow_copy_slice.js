/**
 * Problem 018: Shallow Copy Array
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (slice())
 * 
 * Problem Description:
 * Write a function `cloneArray(arr)` that returns a shallow copy of `arr` using `slice()`.
 * 
 * Example:
 * Input: cloneArray([1, 2, 3])
 * Output: [1, 2, 3] (new reference)
 * 
 * Key Requirements:
 * - Must use `arr.slice()`
 * - Returned array must not equal input reference
 */

function cloneArray(arr) {
  // Write your solution here
}

// Test Cases
const orig = [1, 2];
const copy = cloneArray(orig);
console.log(copy !== orig && copy[0] === 1); // Expected output: true

module.exports = { cloneArray };
