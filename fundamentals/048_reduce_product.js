/**
 * Problem 048: Product of Numbers
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce())
 * 
 * Problem Description:
 * Write a function `productNumbers(numbers)` that computes the product of all elements using `reduce()`. Return 1 if empty.
 * 
 * Example:
 * Input: productNumbers([2, 3, 4])
 * Output: 24
 * 
 * Key Requirements:
 * - Must use `reduce()` with initial value 1
 */

function productNumbers(numbers) {
  let result = numbers.reduce((acc, current) =>{
    return acc*current;
  }, 1);

  return result;
}

// Test Cases
console.log(productNumbers([2, 3, 4])); // Expected output: 24

module.exports = { productNumbers };
