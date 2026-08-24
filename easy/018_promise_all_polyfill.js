/**
 * Problem 018: Promise.all Polyfill
 * Difficulty: Easy
 * Domain: Async JS
 * Companies: Meta, Uber, Airbnb
 * 
 * Problem Description:
 * Implement `promiseAll(promises)` that returns a Promise resolving to an array of results when all input promises resolve.
 * 
 * Example 1:
 * Input: promiseAll([p1, p2, p3])
 * Output: Resolves [res1, res2, res3]
 * 
 * Key Requirements:
 * - Reject immediately on first promise rejection
 * - Preserve output index order matching input promises
 */

function promiseAll(...args) {
  // Write your solution here
}

// Test Cases
// console.log(promiseAll(/* test args */));

module.exports = { promiseAll };
