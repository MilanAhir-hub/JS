/**
 * Problem 054: Promise.allSettled Basic Polyfill
 * Difficulty: Easy
 * Domain: Async JS
 * Companies: Meta, Amazon
 * 
 * Problem Description:
 * Implement `promiseAllSettled(promises)` that returns a promise that resolves after all given promises have settled with an array of outcome objects.
 * 
 * Example 1:
 * Input: promiseAllSettled([p1, p2Fail])
 * Output: [{ status: 'fulfilled', value: v1 }, { status: 'rejected', reason: r2 }]
 * 
 * Key Requirements:
 * - Never reject; return status objects for all promises
 */

function promiseAllSettled(...args) {
  // Write your solution here
}

// Test Cases
// console.log(promiseAllSettled(/* test args */));

module.exports = { promiseAllSettled };
