/**
 * Problem 054: Calculate Average Number
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce())
 * 
 * Problem Description:
 * Write a function `calculateAverage(numbers)` that computes average of array using `reduce()`. Return 0 if empty.
 * 
 * Example:
 * Input: calculateAverage([10, 20, 30, 40])
 * Output: 25
 * 
 * Key Requirements:
 * - Use `reduce()` to sum, then divide by length
 */

function calculateAverage(numbers) {

  if(numbers.length === 0){
    return 0;
  }

  let sum = 0;
  let result = numbers.reduce((acc, current) =>{
    sum = acc+current;

    return sum;
  }, 0);

  return result/numbers.length;
}

// Test Cases
console.log(calculateAverage([10, 20, 30, 40])); // Expected output: 25

module.exports = { calculateAverage };
