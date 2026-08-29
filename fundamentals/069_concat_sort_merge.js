/**
 * Problem 069: Merge and Sort Numeric Arrays
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (concat(), sort())
 * 
 * Problem Description:
 * Write a function `mergeAndSort(arr1, arr2)` that merges `arr1` and `arr2` with `concat()` and sorts ascending with `sort()`.
 * 
 * Example:
 * Input: mergeAndSort([5, 1], [3, 9])
 * Output: [1, 3, 5, 9]
 * 
 * Key Requirements:
 * - Chain `concat()` and `sort((a,b) => a-b)`
 */

function mergeAndSort(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

// Test Cases
console.log(mergeAndSort([5, 1], [3, 9])); // Expected output: [1, 3, 5, 9]

module.exports = { mergeAndSort };
