/**
 * Problem 028: Auto Retry with Exponential Backoff & Jitter
 * Difficulty: Medium
 * Domain: Resilient Architecture
 * Companies: AWS, Stripe
 * 
 * Problem Description:
 * Create `retryWithBackoff(fn, options)` retrying failed async function with exponential delay and randomized jitter.
 * 
 * Example 1:
 * Input: retryWithBackoff(fetchApi, { retries: 3, baseDelay: 100, maxDelay: 2000 })
 * Output: Retries with delays like 100ms, 200ms, 400ms + random jitter
 * 
 * Key Requirements:
 * - Calculate delay = min(maxDelay, baseDelay * 2^attempt) + jitter
 */

function retryWithBackoff(...args) {
  // Write your solution here
}

// Test Cases
// console.log(retryWithBackoff(/* test args */));

module.exports = { retryWithBackoff };
