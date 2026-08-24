/**
 * Problem 095: Express Rate Limiter Memory Basic
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Stripe
 * 
 * Problem Description:
 * Create Express middleware `rateLimiter(maxRequests, windowMs)` that limits request rate per IP.
 * 
 * Example 1:
 * Input: app.use(rateLimiter(10, 60000))
 * Output: Returns 429 Too Many Requests if limit exceeded
 * 
 * Key Requirements:
 * - Track request timestamps per IP in memory
 */

function rateLimiter(...args) {
  // Write your solution here
}

// Test Cases
// console.log(rateLimiter(/* test args */));

module.exports = { rateLimiter };
