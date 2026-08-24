/**
 * Problem 020: Promise.any Polyfill
 * Difficulty: Easy
 * Domain: Async JS
 * Companies: Meta, Microsoft
 * 
 * Problem Description:
 * Implement `promiseAny(promises)` that takes an iterable of promises and returns a single promise that resolves as soon as any of the promises resolves.
 * 
 * Example 1:
 * Input: promiseAny([pFail, pSuccess])
 * Output: Resolves with pSuccess value
 * 
 * Key Requirements:
 * - Reject with AggregateError if all promises reject
 */

function promiseAny(...args) {
  // Write your solution here
}

// Test Cases
// console.log(promiseAny(/* test args */));

module.exports = { promiseAny };
