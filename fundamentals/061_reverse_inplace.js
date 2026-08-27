/**
 * Problem 061: Reverse Array In-Place
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reverse())
 * 
 * Problem Description:
 * Write a function `reverseInPlace(arr)` that reverses `arr` in-place using `reverse()` and returns it.
 * 
 * Example:
 * Input: reverseInPlace([1, 2, 3])
 * Output: [3, 2, 1]
 * 
 * Key Requirements:
 * - Must use `reverse()`
 */

function reverseInPlace(arr) {
  return arr.reverse();
}

// Test Cases
console.log(reverseInPlace([1, 2, 3])); // Expected output: [3, 2, 1]

module.exports = { reverseInPlace };
