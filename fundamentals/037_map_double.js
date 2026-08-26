/**
 * Problem 037: Double Array Values
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (map())
 * 
 * Problem Description:
 * Write a function `doubleNumbers(numbers)` that returns a new array with every number doubled using `map()`.
 * 
 * Example:
 * Input: doubleNumbers([1, 2, 3])
 * Output: [2, 4, 6]
 * 
 * Key Requirements:
 * - Must use `map()`
 * - Return new array
 */

function doubleNumbers(numbers) {
  let result = numbers.map(number => number*2);

  return result;
}

// Test Cases
console.log(doubleNumbers([1, 2, 3])); // Expected output: [2, 4, 6]

module.exports = { doubleNumbers };
