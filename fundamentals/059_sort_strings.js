/**
 * Problem 059: Sort Strings Alphabetically
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (sort())
 * 
 * Problem Description:
 * Write a function `sortStrings(words)` that sorts strings alphabetically using `sort()` and `localeCompare()`.
 * 
 * Example:
 * Input: sortStrings(["banana", "apple", "cherry"])
 * Output: ["apple", "banana", "cherry"]
 * 
 * Key Requirements:
 * - Use `localeCompare()` inside sort callback
 */

function sortStrings(words) {
  return words.sort((a, b) => a.localeCompare(b));
}

// Test Cases
console.log(sortStrings(["banana", "apple", "cherry"])); // Expected output: ["apple", "banana", "cherry"]

module.exports = { sortStrings };
