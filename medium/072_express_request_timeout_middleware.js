/**
 * Problem 072: Express Request Timeout Middleware
 * Difficulty: Medium
 * Domain: Express.js Performance
 * Companies: Node.js, Cloudflare
 * 
 * Problem Description:
 * Create Express middleware `requestTimeout(ms)` that aborts requests exceeding `ms` duration with 503 error.
 * 
 * Example 1:
 * Input: app.use(requestTimeout(5000))
 * Output: Responds with 503 Service Unavailable if timeout reached
 * 
 * Key Requirements:
 * - Clear timeout when response finishes
 */

function requestTimeout(...args) {
  // Write your solution here
}

// Test Cases
// console.log(requestTimeout(/* test args */));

module.exports = { requestTimeout };
