/**
 * Problem 044: Remove Falsy Values
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter())
 * 
 * Problem Description:
 * Write a function `compact(arr)` that filters out falsy values (false, null, 0, "", undefined, NaN) using `filter(Boolean)`.
 * 
 * Example:
 * Input: compact([0, 1, false, 2, "", 3, null])
 * Output: [1, 2, 3]
 * 
 * Key Requirements:
 * - Must use `filter(Boolean)`
 */

function compact(arr) {
  // Write your solution here
}

// Test Cases
console.log(compact([0, 1, false, 2, "", 3, null])); // Expected output: [1, 2, 3]

module.exports = { compact };
