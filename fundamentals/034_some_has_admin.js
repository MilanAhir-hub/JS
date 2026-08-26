/**
 * Problem 034: Check Admin Presence
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (some())
 * 
 * Problem Description:
 * Write a function `hasAdminUser(users)` that checks if any user has `role === "admin"` using `some()`.
 * 
 * Example:
 * Input: hasAdminUser([{role: "user"}, {role: "admin"}])
 * Output: true
 * 
 * Key Requirements:
 * - Must use `some()`
 * - Return boolean
 */

function hasAdminUser(users) {
  let result = users.some(user => user.role == "admin");
  return result;
}

// Test Cases
console.log(hasAdminUser([{role: "user"}, {role: "admin"}])); // Expected output: true

module.exports = { hasAdminUser };
