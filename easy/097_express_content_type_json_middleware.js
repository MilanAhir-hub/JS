/**
 * Problem 097: Express Content Type JSON Middleware
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Google
 * 
 * Problem Description:
 * Create Express middleware `requireJsonHeader` enforcing `Content-Type: application/json` on POST/PUT requests.
 * 
 * Example 1:
 * Input: app.use(requireJsonHeader)
 * Output: Returns 415 Unsupported Media Type if header missing
 * 
 * Key Requirements:
 * - Check req.method and req.headers['content-type']
 */

function requireJsonHeader(...args) {
  // Write your solution here
}

// Test Cases
// console.log(requireJsonHeader(/* test args */));

module.exports = { requireJsonHeader };
