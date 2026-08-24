/**
 * Problem 092: Missing Required Permissions
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter(), includes())
 * 
 * Problem Description:
 * Write a function `getMissingPermissions(required, userPermissions)` that returns array of permissions from `required` that user does NOT have using `filter()` and `includes()`.
 * 
 * Example:
 * Input: getMissingPermissions(["read", "write", "execute"], ["read"])
 * Output: ["write", "execute"]
 * 
 * Key Requirements:
 * - Filter `required` where `!userPermissions.includes(perm)`
 */

function getMissingPermissions(required, userPermissions) {
  // Write your solution here
}

// Test Cases
console.log(getMissingPermissions(["read", "write", "execute"], ["read"]));

module.exports = { getMissingPermissions };
