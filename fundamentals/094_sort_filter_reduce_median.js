/**
 * Problem 094: Median of Even Numbers
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter(), slice(), sort())
 * 
 * Problem Description:
 * Write a function `medianOfEvens(numbers)` that filters even numbers, sorts them, and calculates median value.
 * 
 * Example:
 * Input: medianOfEvens([7, 2, 10, 4, 8])
 * Output: 6 (evens are [2, 4, 8, 10], median is (4+8)/2 = 6)
 * 
 * Key Requirements:
 * - Filter evens with `filter()`
 * - Sort ascending with `sort()`
 * - Compute middle average if even length, middle element if odd length
 */

function medianOfEvens(numbers) {
  // Write your solution here
}

// Test Cases
console.log(medianOfEvens([7, 2, 10, 4, 8])); // Expected output: 6

module.exports = { medianOfEvens };
