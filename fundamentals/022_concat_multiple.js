/**
 * Problem 022: Merge Multiple Lists
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (concat())
 * 
 * Problem Description:
 * Write a function `mergeMultiple(...arrays)` that merges any number of arrays using `concat()`.
 * 
 * Example:
 * Input: mergeMultiple([1], [2, 3], [4])
 * Output: [1, 2, 3, 4]
 * 
 * Key Requirements:
 * - Must use `concat()`
 * - Handle variable arguments
 */

function mergeMultiple(...arrays) {
  // Write your solution here
  return [].concat(...arrays);
}

// Test Cases
console.log(mergeMultiple([1], [2, 3], [4])); // Expected output: [1, 2, 3, 4]

module.exports = { mergeMultiple };
