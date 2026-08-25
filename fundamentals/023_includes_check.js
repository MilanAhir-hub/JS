/**
 * Problem 023: Check Item Existence
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (includes())
 * 
 * Problem Description:
 * Write a function `hasItem(arr, target)` that returns `true` if `target` is in `arr` using `includes()`.
 * 
 * Example:
 * Input: hasItem(["apple", "banana"], "apple")
 * Output: true
 * 
 * Key Requirements:
 * - Must use `includes()`
 * - Return boolean
 */

function hasItem(arr, target) {
  // Write your solution here

  return arr.includes(target);
}

// Test Cases
console.log(hasItem(["apple", "banana"], "apple")); // Expected output: true

module.exports = { hasItem };
