/**
 * Problem 016: Insert Elements at Index
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (splice())
 * 
 * Problem Description:
 * Write a function `insertAtIndex(arr, index, ...items)` that inserts `items` at `index` without deleting any elements using `splice()`.
 * 
 * Example:
 * Input: insertAtIndex([1, 4, 5], 1, 2, 3)
 * Output: [1, 2, 3, 4, 5]
 * 
 * Key Requirements:
 * - Must use `splice(index, 0, ...items)`
 * - Return mutated array
 */

function insertAtIndex(arr, index, ...items) {
  arr.splice(index, 0, ...items);
  
  return arr;
}

// Test Cases
console.log(insertAtIndex([1, 4, 5], 1, 2, 3)); // Expected output: [1, 2, 3, 4, 5]

module.exports = { insertAtIndex };
