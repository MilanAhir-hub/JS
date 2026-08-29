/**
 * Problem 066: Uppercase Names and Sort Alphabetically
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (map(), sort())
 * 
 * Problem Description:
 * Write a function `formatAndSortNames(names)` that converts strings to uppercase and sorts them using `map()` and `sort()`.
 * 
 * Example:
 * Input: formatAndSortNames(["charlie", "alice", "bob"])
 * Output: ["ALICE", "BOB", "CHARLIE"]
 * 
 * Key Requirements:
 * - Use `map()` for uppercase transformation
 * - Use `sort()` for alphabetical sorting
 */

function formatAndSortNames(names) {
  return names.sort((a, b) => a.localeCompare(b)).map((name) => name.toUpperCase());
}

// Test Cases
console.log(formatAndSortNames(["charlie", "alice", "bob"])); // Expected output: ["ALICE", "BOB", "CHARLIE"]

module.exports = { formatAndSortNames };
