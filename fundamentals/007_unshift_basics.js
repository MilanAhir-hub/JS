/**
 * Problem 007: Prepend Elements with Unshift
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (unshift())
 * 
 * Problem Description:
 * Write a function `prependElements(arr, ...items)` that adds `items` to the front of `arr` using `unshift()` and returns `arr`.
 * 
 * Example:
 * Input: prependElements([3, 4], 1, 2)
 * Output: [1, 2, 3, 4]
 * 
 * Key Requirements:
 * - Must use `unshift()`
 * - Return modified array
 */

// unshift is used to add the items at the first inside an array

function prependElements(arr, ...items) {
  arr.unshift(...items);
  return arr;
}

// Test Cases
console.log(prependElements([3, 4], 1, 2)); // Expected output: [1, 2, 3, 4]

module.exports = { prependElements };
