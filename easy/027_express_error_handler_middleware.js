/**
 * Problem 027: Express Error Handler Middleware
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Meta
 * 
 * Problem Description:
 * Create an Express error-handling middleware function `errorHandler(err, req, res, next)`.
 * 
 * Example 1:
 * Input: app.use(errorHandler)
 * Output: Responds with 500 JSON object { error: err.message }
 * 
 * Key Requirements:
 * - Must accept 4 parameters (err, req, res, next)
 */

function errorHandler(...args) {
  // Write your solution here
}

// Test Cases
// console.log(errorHandler(/* test args */));

module.exports = { errorHandler };
