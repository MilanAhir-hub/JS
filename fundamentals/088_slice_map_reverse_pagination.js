/**
 * Problem 088: Paginate and Reverse Display
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (slice(), map(), reverse())
 * 
 * Problem Description:
 * Write a function `getPaginatedReversed(items, page, pageSize)` that extracts page slice using `slice()`, maps items with uppercase, and reverses the page display.
 * 
 * Example:
 * Input: getPaginatedReversed(["a", "b", "c", "d", "e"], 1, 2)
 * Output: ["B", "A"] (page 1 is ["a", "b"])
 * 
 * Key Requirements:
 * - Slice using `(page - 1) * pageSize` to `page * pageSize`
 * - Map to uppercase
 * - Reverse page items
 */

function getPaginatedReversed(items, page, pageSize) {
  // Write your solution here
}

// Test Cases
console.log(getPaginatedReversed(["a", "b", "c", "d", "e"], 1, 2)); // Expected output: ["B", "A"]

module.exports = { getPaginatedReversed };
