/**
 * Problem 045: Express Session Middleware (Memory Store)
 * Difficulty: Medium
 * Domain: Express.js
 * Companies: Passport, Node.js
 * 
 * Problem Description:
 * Create Express middleware `sessionMiddleware(options)` that manages session cookies and attaches `req.session` object.
 * 
 * Example 1:
 * Input: app.use(sessionMiddleware({ secret: 'cat' })); req.session.user = 'Alice';
 * Output: Persists session state across requests via signed cookie
 * 
 * Key Requirements:
 * - Generate unique sessionId and store session data in memory
 */

function sessionMiddleware(...args) {
  // Write your solution here
}

// Test Cases
// console.log(sessionMiddleware(/* test args */));

module.exports = { sessionMiddleware };
