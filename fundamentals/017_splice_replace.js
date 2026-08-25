/**
 * Problem 017: Replace Element at Index
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (splice())
 * 
 * Problem Description:
 * Write a function `replaceAtIndex(arr, index, newItem)` that replaces the element at `index` with `newItem` using `splice()`.
 * 
 * Example:
 * Input: replaceAtIndex(["red", "blue", "green"], 1, "yellow")
 * Output: ["red", "yellow", "green"]
 * 
 * Key Requirements:
 * - Must use `splice(index, 1, newItem)`
 * - Return mutated array
 */

function replaceAtIndex(arr, index, newItem) {
  arr.splice(index, 1, newItem);

  return arr;
}

// Test Cases
console.log(replaceAtIndex(["red", "blue", "green"], 1, "yellow")); // Expected output: ["red", "yellow", "green"]

module.exports = { replaceAtIndex };
