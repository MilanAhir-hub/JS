/**
 * Problem 030: Find First Even Number
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (find())
 * 
 * Problem Description:
 * Write a function `findFirstEven(numbers)` that returns the first even number using `find()`.
 * 
 * Example:
 * Input: findFirstEven([1, 3, 4, 7, 8])
 * Output: 4
 * 
 * Key Requirements:
 * - Must use `find()`
 * - Return undefined if no even numbers
 */

function findFirstEven(numbers) {
  let x = numbers.find(x => x%2 == 0);

  if(x){
    return x;
  }

  return undefined;
}

// Test Cases
console.log(findFirstEven([1, 3, 4, 7, 8])); // Expected output: 4

module.exports = { findFirstEven };
