/**
 * Problem 057: Sort Numbers Ascending
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (sort())
 * 
 * Problem Description:
 * Write a function `sortAscending(numbers)` that sorts numeric array in ascending order using `sort()`.
 * 
 * Example:
 * Input: sortAscending([10, 2, 5, 1, 8])
 * Output: [1, 2, 5, 8, 10]
 * 
 * Key Requirements:
 * - Must use comparator `(a, b) => a - b`
 */

function sortAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Test Cases
console.log(sortAscending([10, 2, 5, 1, 8])); // Expected output: [1, 2, 5, 8, 10]

module.exports = { sortAscending };
