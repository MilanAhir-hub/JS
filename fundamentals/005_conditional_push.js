/**
 * Problem 005: Collect Even Numbers with Push
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (push())
 * 
 * Problem Description:
 * Write a function `collectEvens(numbers)` that loops through `numbers` and pushes even numbers to a new array.
 * 
 * Example:
 * Input: collectEvens([1, 2, 3, 4, 5, 6])
 * Output: [2, 4, 6]
 * 
 * Key Requirements:
 * - Use `push()` to build output array
 * - Return empty array if no evens
 */

function collectEvens(numbers) {
  const evens = [];

  for(let item of numbers){
    if(item%2 === 0){
      evens.push(item);
    }
  }

  return evens;
}

// Test Cases
console.log(collectEvens([1, 2, 3, 4, 5, 6])); // Expected output: [2, 4, 6]

module.exports = { collectEvens };
