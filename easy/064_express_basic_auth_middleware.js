/**
 * Problem 064: Express Basic Auth Middleware
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Amazon
 * 
 * Problem Description:
 * Create Express middleware `basicAuth(username, password)` that verifies HTTP Basic Authentication headers.
 * 
 * Example 1:
 * Input: app.use(basicAuth('admin', 'secret'))
 * Output: Returns 401 Unauthorized if credentials invalid
 * 
 * Key Requirements:
 * - Decode Base64 Authorization header
 */

function basicAuth(...args) {
  // Write your solution here
}

// Test Cases
// console.log(basicAuth(/* test args */));

module.exports = { basicAuth };
