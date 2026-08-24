/**
 * Problem 009: Once Function Utility
 * Difficulty: Easy
 * Domain: Functional JS
 * Companies: Lodash, Uber
 * 
 * Problem Description:
 * Create a `once(fn)` helper that restricts `fn` to be executed only once. Subsequent calls return the result of the first invocation.
 * 
 * Example 1:
 * Input: const initialize = once(() => setup()); initialize(); initialize();
 * Output: setup() called only on first invocation
 * 
 * Key Requirements:
 * - Cache and return result of first invocation on subsequent calls
 */

function once(...args) {
  // Write your solution here
}

// Test Cases
// console.log(once(/* test args */));

module.exports = { once };
