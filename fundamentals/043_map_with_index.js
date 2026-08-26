/**
 * Problem 043: Format Items with 1-based Index
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (map())
 * 
 * Problem Description:
 * Write a function `formatNumberedList(items)` that returns strings like `"1. ItemName"` using `map(item, index)`.
 * 
 * Example:
 * Input: formatNumberedList(["Apple", "Banana"])
 * Output: ["1. Apple", "2. Banana"]
 * 
 * Key Requirements:
 * - Use second argument of `map()` callback
 */

function formatNumberedList(items) {
  let result = items.map((item, index) => `${index+1}. ${item}`);

  return result;
}

// Test Cases
console.log(formatNumberedList(["Apple", "Banana"])); // Expected output: ["1. Apple", "2. Banana"]

module.exports = { formatNumberedList };
