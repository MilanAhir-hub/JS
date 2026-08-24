/**
 * Problem 008: Shift First Element
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (shift())
 * 
 * Problem Description:
 * Write a function `removeFirstElement(arr)` that removes the first element of an array using `shift()` and returns `{ removed, remaining }`.
 * 
 * Example:
 * Input: removeFirstElement(["first", "second", "third"])
 * Output: { removed: "first", remaining: ["second", "third"] }
 * 
 * Key Requirements:
 * - Must use `shift()`
 * - Handle empty array case
 */

function removeFirstElement(arr) {
  let removed = arr.shift();

  return {removedEle: removed, remaining: arr};
}

// Test Cases
console.log(removeFirstElement(["first", "second", "third"])); // Expected output: { removed: "first", remaining: ["second", "third"] }

module.exports = { removeFirstElement };
