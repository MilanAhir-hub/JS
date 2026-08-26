/**
 * Problem 049: Find Maximum Value
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce())
 * 
 * Problem Description:
 * Write a function `findMax(numbers)` that finds the maximum value using `reduce()`. Return `-Infinity` if empty.
 * 
 * Example:
 * Input: findMax([3, 7, 2, 9, 4])
 * Output: 9
 * 
 * Key Requirements:
 * - Must use `reduce()`
 */

function findMax(numbers) {
  let result = numbers.reduce((acc, current) =>{
    if(current > acc){
      return current;
    }else{
      return acc;
    }
  }, -Infinity);

  return result;
}

// Test Cases
console.log(findMax([3, 7, 2, 9, 4])); // Expected output: 9

module.exports = { findMax };
