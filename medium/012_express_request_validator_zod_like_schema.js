/**
 * Problem 012: Express Request Validator (Zod-like Schema)
 * Difficulty: Medium
 * Domain: Express.js Patterns
 * Companies: Node.js, Stripe
 * 
 * Problem Description:
 * Create Express middleware `validateRequest(schema)` validating `req.body`, `req.query`, and `req.params` against schema rules.
 * 
 * Example 1:
 * Input: app.use(validateRequest({ body: { email: 'string', age: 'number' } }))
 * Output: Passes control or returns 422 Unprocessable Entity with error list
 * 
 * Key Requirements:
 * - Validate field presence and data types
 * - Return detailed validation error array
 */

function validateRequest(...args) {
  // Write your solution here
}

// Test Cases
// console.log(validateRequest(/* test args */));

module.exports = { validateRequest };
