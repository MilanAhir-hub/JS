/**
 * Problem 024: Express Request Logger Middleware
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Express, Node.js
 * 
 * Problem Description:
 * Create an Express middleware `requestLogger` that logs HTTP method, URL, and timestamp for incoming requests.
 * 
 * Example 1:
 * Input: app.use(requestLogger)
 * Output: Logs '[2026-08-23] GET /api/users'
 * 
 * Key Requirements:
 * - Call `next()` to pass control to next middleware
 */

function requestLogger(...args) {
  // Write your solution here
}

// Test Cases
// console.log(requestLogger(/* test args */));

module.exports = { requestLogger };
