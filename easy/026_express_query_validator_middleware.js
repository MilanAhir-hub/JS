/**
 * Problem 026: Express Query Validator Middleware
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Amazon
 * 
 * Problem Description:
 * Create an Express middleware `validateQueryParams(requiredKeys)` that returns 400 Bad Request if required query params are missing.
 * 
 * Example 1:
 * Input: app.use(validateQueryParams(['page', 'limit']))
 * Output: Returns 400 if page or limit missing in req.query
 * 
 * Key Requirements:
 * - Call next() if valid, else res.status(400).json(...)
 */

function validateQueryParams(...args) {
  // Write your solution here
}

// Test Cases
// console.log(validateQueryParams(/* test args */));

module.exports = { validateQueryParams };
