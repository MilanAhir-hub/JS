/**
 * Problem 025: Express CORS Header Middleware
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Web Security, Node.js
 * 
 * Problem Description:
 * Create an Express middleware `corsMiddleware` that sets Access-Control-Allow-Origin headers.
 * 
 * Example 1:
 * Input: app.use(corsMiddleware)
 * Output: Sets header 'Access-Control-Allow-Origin: *'
 * 
 * Key Requirements:
 * - Handle preflight OPTIONS requests
 */

function corsMiddleware(...args) {
  // Write your solution here
}

// Test Cases
// console.log(corsMiddleware(/* test args */));

module.exports = { corsMiddleware };
