/**
 * Problem 063: Express Response Time Middleware
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Datadog
 * 
 * Problem Description:
 * Create Express middleware `responseTime` that calculates request handling duration and sets `X-Response-Time` header.
 * 
 * Example 1:
 * Input: app.use(responseTime)
 * Output: Sets header 'X-Response-Time: 12ms'
 * 
 * Key Requirements:
 * - Record start time and set header before sending response
 */

function responseTime(...args) {
  // Write your solution here
}

// Test Cases
// console.log(responseTime(/* test args */));

module.exports = { responseTime };
