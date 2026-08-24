/**
 * Problem 011: Express JWT Auth Middleware with Refresh
 * Difficulty: Medium
 * Domain: Express.js Security
 * Companies: Auth0, Okta, Amazon
 * 
 * Problem Description:
 * Create Express middleware `jwtAuth(secret)` verifying Authorization Bearer tokens and attaching decoded user to `req.user`.
 * 
 * Example 1:
 * Input: app.use(jwtAuth('secret_key'))
 * Output: Attaches req.user or returns 401 Unauthorized
 * 
 * Key Requirements:
 * - Extract 'Bearer <token>' header
 * - Handle token expiration error specifically
 */

function jwtAuth(...args) {
  // Write your solution here
}

// Test Cases
// console.log(jwtAuth(/* test args */));

module.exports = { jwtAuth };
