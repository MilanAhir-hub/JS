/**
 * Problem 028: Merge and Verify Element
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (concat(), includes())
 * 
 * Problem Description:
 * Write a function `mergeAndCheck(arr1, arr2, target)` that merges `arr1` and `arr2` using `concat()` and returns `true` if `target` exists using `includes()`.
 * 
 * Example:
 * Input: mergeAndCheck([1, 2], [3, 4], 3)
 * Output: true
 * 
 * Key Requirements:
 * - Use `concat()` to combine
 * - Use `includes()` to search
 */

function mergeAndCheck(arr1, arr2, target) {
  let result = arr1.concat(arr2).includes(target);

  return result;
}

// Test Cases
console.log(mergeAndCheck([1, 2], [3, 4], 5)); // Expected output: false

module.exports = { mergeAndCheck };
