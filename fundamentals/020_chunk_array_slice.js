/**
 * Problem 020: Chunk Array into Pairs/Groups
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (slice())
 * 
 * Problem Description:
 * Write a function `chunkArray(arr, size)` that splits `arr` into sub-arrays of maximum length `size` using `slice()`.
 * 
 * Example:
 * Input: chunkArray([1, 2, 3, 4, 5], 2)
 * Output: [[1, 2], [3, 4], [5]]
 * 
 * Key Requirements:
 * - Use `slice()` inside a loop
 * - Original array untouched
 */

function chunkArray(arr, size) {
  let result = [];

  for(let i =0; i<arr.length; i+=size){
    let chunk = arr.slice(i, i+size);
    result.push(chunk);
  }

  return result;


}

// Test Cases
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Expected output: [[1, 2], [3, 4], [5]]

module.exports = { chunkArray };
