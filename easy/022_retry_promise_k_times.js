/**
 * Problem 022: Retry Promise K Times
 * Difficulty: Easy
 * Domain: Async JS
 * Companies: Uber, Stripe
 * 
 * Problem Description:
 * Create `retryPromise(fn, retries)` that attempts executing an async function `fn` up to `retries` times until it succeeds.
 * 
 * Example 1:
 * Input: retryPromise(fetchData, 3)
 * Output: Resolves result or rejects after 3 failed attempts
 * 
 * Key Requirements:
 * - Re-throw last error if all retries fail
 */

function retryPromise(...args) {
  // Write your solution here
}

// Test Cases
// console.log(retryPromise(/* test args */));

module.exports = { retryPromise };
