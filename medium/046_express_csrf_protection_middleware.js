/**
 * Problem 046: Express CSRF Protection Middleware
 * Difficulty: Medium
 * Domain: Express.js Security
 * Companies: OWASP, Stripe
 * 
 * Problem Description:
 * Create Express middleware `csrfProtection` generating secret CSRF tokens for GET and validating tokens on POST/PUT/DELETE.
 * 
 * Example 1:
 * Input: app.use(csrfProtection)
 * Output: Returns 403 Forbidden if invalid CSRF token provided
 * 
 * Key Requirements:
 * - Verify token in req.body or headers against session secret
 */

function csrfProtection(...args) {
  // Write your solution here
}

// Test Cases
// console.log(csrfProtection(/* test args */));

module.exports = { csrfProtection };
