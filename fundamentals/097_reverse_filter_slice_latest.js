/**
 * Problem 097: Retrieve N Most Recent Error Logs
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (slice(), reverse(), filter())
 * 
 * Problem Description:
 * Write a function `getRecentErrors(logs, n)` that takes `logs`, reverses order so newest come first, filters entries with `level === "ERROR"`, and takes first `n`.
 * 
 * Example:
 * Input: getRecentErrors([{level: "INFO"}, {level: "ERROR", msg: "E1"}, {level: "ERROR", msg: "E2"}], 1)
 * Output: [{level: "ERROR", msg: "E2"}]
 * 
 * Key Requirements:
 * - Use `slice()` and `reverse()` to read backwards
 * - Filter by level
 * - Take first N with `slice(0, n)`
 */

function getRecentErrors(logs, n) {
  // Write your solution here
}

// Test Cases
console.log(getRecentErrors([{level: "INFO"}, {level: "ERROR", msg: "E1"}, {level: "ERROR", msg: "E2"}], 1));

module.exports = { getRecentErrors };
