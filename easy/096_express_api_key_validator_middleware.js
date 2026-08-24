/**
 * Problem 096: Express API Key Validator Middleware
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Amazon
 * 
 * Problem Description:
 * Create Express middleware `apiKeyAuth(validKeys)` that checks for header `x-api-key`.
 * 
 * Example 1:
 * Input: app.use(apiKeyAuth(['key123']))
 * Output: Returns 401 Unauthorized if x-api-key header missing/invalid
 * 
 * Key Requirements:
 * - Validate header against allowed keys array
 */

function apiKeyAuth(...args) {
  // Write your solution here
}

// Test Cases
// console.log(apiKeyAuth(/* test args */));

module.exports = { apiKeyAuth };
