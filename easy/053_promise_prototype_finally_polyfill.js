/**
 * Problem 053: Promise.prototype.finally Polyfill
 * Difficulty: Easy
 * Domain: Async JS
 * Companies: Meta, Netflix
 * 
 * Problem Description:
 * Implement `myFinally(onFinally)` on Promise prototype that executes a callback regardless of promise outcome.
 * 
 * Example 1:
 * Input: p.myFinally(() => cleanup())
 * Output: Executes cleanup() and passes through original resolution/rejection
 * 
 * Key Requirements:
 * - Preserve original promise result or rejection
 */

function myFinally(...args) {
  // Write your solution here
}

// Test Cases
// console.log(myFinally(/* test args */));

module.exports = { myFinally };
