/**
 * Problem 039: Filter Even Numbers
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter())
 * 
 * Problem Description:
 * Write a function `filterEvens(numbers)` that returns an array of even numbers using `filter()`.
 * 
 * Example:
 * Input: filterEvens([1, 2, 3, 4, 5])
 * Output: [2, 4]
 * 
 * Key Requirements:
 * - Must use `filter()`
 */

// filter always returns a new array
function filterEvens(numbers) {
  let result = numbers.filter(number=> number%2 == 0);

  return result;
}

// Test Cases
console.log(filterEvens([1, 2, 3, 4, 5])); // Expected output: [2, 4]

module.exports = { filterEvens };
