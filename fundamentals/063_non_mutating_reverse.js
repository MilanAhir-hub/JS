/**
 * Problem 063: Immutable Reverse
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (slice(), reverse())
 * 
 * Problem Description:
 * Write a function `safeReverse(arr)` that returns a reversed copy without mutating original array using `slice()` and `reverse()`.
 * 
 * Example:
 * Input: const orig = [1, 2, 3]; safeReverse(orig);
 * Output: [3, 2, 1], orig stays [1, 2, 3]
 * 
 * Key Requirements:
 * - Must copy first with `slice()` then call `reverse()`
 */

function safeReverse(arr) {
  let copy = arr.slice(0, arr.length);

  return copy.reverse();
}

// Test Cases
const orig = [1, 2, 3];
console.log(safeReverse(orig)); // Expected output: [3, 2, 1]

module.exports = { safeReverse };
