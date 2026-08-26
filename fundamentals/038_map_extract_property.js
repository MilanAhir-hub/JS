/**
 * Problem 038: Pluck Property from Objects
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (map())
 * 
 * Problem Description:
 * Write a function `pluck(items, key)` that extracts the specified `key` property from each object in `items` using `map()`.
 * 
 * Example:
 * Input: pluck([{a: 1}, {a: 2}], "a")
 * Output: [1, 2]
 * 
 * Key Requirements:
 * - Must use `map()`
 */

function pluck(items, key) {
  let result = items.map(item => item[key]);

  return result;
}

// Test Cases
console.log(pluck([{a: 1}, {a: 2}], "a")); // Expected output: [1, 2]

module.exports = { pluck };
