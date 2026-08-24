/**
 * Problem 062: Express Request ID Middleware
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Uber
 * 
 * Problem Description:
 * Create Express middleware `requestId` that assigns a unique UUID / string ID to `req.id` and header `X-Request-Id`.
 * 
 * Example 1:
 * Input: app.use(requestId)
 * Output: Sets req.id and X-Request-Id header
 * 
 * Key Requirements:
 * - Generate unique identifier per request
 */

function requestId(...args) {
  // Write your solution here
}

// Test Cases
// console.log(requestId(/* test args */));

module.exports = { requestId };
