/**
 * Problem 047: Sum of Numbers
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce())
 * 
 * Problem Description:
 * Write a function `sumNumbers(numbers)` that calculates total sum using `reduce()`. Return 0 for empty array.
 * 
 * Example:
 * Input: sumNumbers([1, 2, 3, 4])
 * Output: 10
 * 
 * Key Requirements:
 * - Must use `reduce()` with initial value 0
 */

function sumNumbers(numbers) {
  let result = numbers.reduce((acc, current) => {
    return acc+current;
  }, 0)

  return result;
}

// Test Cases
console.log(sumNumbers([1, 2, 3, 4])); // Expected output: 10

module.exports = { sumNumbers };
