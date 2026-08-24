/**
 * Problem 099: Reorder Array Halves with Reverse
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (splice(), reverse(), concat())
 * 
 * Problem Description:
 * Write a function `reorderHalves(arr)` that splits array into left and right halves, reverses the right half, and concatenates left + reversed right.
 * 
 * Example:
 * Input: reorderHalves([1, 2, 3, 4, 5, 6])
 * Output: [1, 2, 3, 6, 5, 4]
 * 
 * Key Requirements:
 * - Use `slice()` or `splice()` to divide
 * - Use `reverse()` on right half
 * - Use `concat()` to combine
 */

function reorderHalves(arr) {
  // Write your solution here
}

// Test Cases
console.log(reorderHalves([1, 2, 3, 4, 5, 6])); // Expected output: [1, 2, 3, 6, 5, 4]

module.exports = { reorderHalves };
