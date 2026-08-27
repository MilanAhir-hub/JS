/**
 * Problem 062: Immutable Sort
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (slice(), sort())
 * 
 * Problem Description:
 * Write a function `safeSort(numbers)` that returns a sorted copy of numbers without mutating original array using `slice()` and `sort()`.
 * 
 * Example:
 * Input: const orig = [3, 1, 2]; safeSort(orig);
 * Output: [1, 2, 3], orig stays [3, 1, 2]
 * 
 * Key Requirements:
 * - Must copy first with `slice()` then call `sort()`
 */

function safeSort(numbers) {
  let copy = numbers.slice(0, numbers.length);

  return copy.sort();
}

// Test Cases
const orig = [3, 1, 2];
console.log(safeSort(orig)); // Expected output: [1, 2, 3]

module.exports = { safeSort };
