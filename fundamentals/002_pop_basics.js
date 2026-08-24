/**
 * Problem 002: Pop Last Element
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (pop())
 * 
 * Problem Description:
 * Write a function `removeLastElement(arr)` that removes the last element of an array using `pop()` and returns an object `{ removed, remaining }`.
 * 
 * Example:
 * Input: removeLastElement([10, 20, 30])
 * Output: { removed: 30, remaining: [10, 20] }
 * 
 * Key Requirements:
 * - Must use Array.prototype.pop()
 * - Handle empty array case
 */

function removeLastElement(arr) {
  const removed = arr.pop();

  return { removed, remaining: arr };
}

// Test Cases
console.log(removeLastElement([10, 20, 30])); // Expected output: { removed: 30, remaining: [10, 20] }

module.exports = { removeLastElement };
