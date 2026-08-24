/**
 * Problem 073: Maintain Capped Log Buffer
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (push(), slice())
 * 
 * Problem Description:
 * Write a function `logMessage(buffer, msg, maxLen)` that pushes `msg` to `buffer` and caps size to `maxLen` using `push()` and `slice()`.
 * 
 * Example:
 * Input: logMessage(["m1", "m2"], "m3", 2)
 * Output: ["m2", "m3"]
 * 
 * Key Requirements:
 * - Use `push()` to append
 * - Use `slice(-maxLen)` to cap size
 */

function logMessage(buffer, msg, maxLen) {
  // Write your solution here
}

// Test Cases
console.log(logMessage(["m1", "m2"], "m3", 2)); // Expected output: ["m2", "m3"]

module.exports = { logMessage };
