/**
 * Problem 071: Express Request Sanitizer Middleware
 * Difficulty: Medium
 * Domain: Express.js Security
 * Companies: Node.js, OWASP
 * 
 * Problem Description:
 * Create Express middleware `sanitizeInputs` that recursively strips script tags from `req.body`, `req.query`, `req.params`.
 * 
 * Example 1:
 * Input: app.use(sanitizeInputs)
 * Output: Sanitizes user input strings to prevent XSS
 * 
 * Key Requirements:
 * - Sanitize nested object and array string properties
 */

function sanitizeInputs(...args) {
  // Write your solution here
}

// Test Cases
// console.log(sanitizeInputs(/* test args */));

module.exports = { sanitizeInputs };
