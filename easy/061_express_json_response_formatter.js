/**
 * Problem 061: Express JSON Response Formatter
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Stripe
 * 
 * Problem Description:
 * Create Express middleware `jsonFormatter` that wraps response in standard format `{ success: true, data: ... }`.
 * 
 * Example 1:
 * Input: app.use(jsonFormatter); res.formatJson({ user: 'John' })
 * Output: Sends `{ success: true, data: { user: 'John' } }`
 * 
 * Key Requirements:
 * - Attach helper method to `res` object
 */

function jsonFormatter(...args) {
  // Write your solution here
}

// Test Cases
// console.log(jsonFormatter(/* test args */));

module.exports = { jsonFormatter };
