/**
 * Problem 001: Debounce with Leading, Trailing & Cancel Options
 * Difficulty: Medium
 * Domain: Advanced JS
 * Companies: Meta, Uber, Airbnb
 * 
 * Problem Description:
 * Implement an advanced `debounce` utility supporting `{ leading: boolean, trailing: boolean }` options and `.cancel()` / `.flush()` methods.
 * 
 * Example 1:
 * Input: const debounced = debounce(fn, 100, { leading: true, trailing: false }); debounced.cancel();
 * Output: Triggers on leading edge and allows cancellation
 * 
 * Key Requirements:
 * - Support leading and trailing invocation flags
 * - Provide .cancel() method to abort pending timers
 * - Provide .flush() method to immediately execute pending invocation
 */

function debounce(...args) {
  // Write your solution here
}

// Test Cases
// console.log(debounce(/* test args */));

module.exports = { debounce };
