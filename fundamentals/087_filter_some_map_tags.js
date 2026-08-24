/**
 * Problem 087: Get Usernames matching Target Roles
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter(), some(), map())
 * 
 * Problem Description:
 * Write a function `getUsersWithRoles(users, targetRoles)` that filters users matching any target role and returns upper-cased names.
 * 
 * Example:
 * Input: getUsersWithRoles([{name: "alice", roles: ["admin"]}, {name: "bob", roles: ["guest"]}], ["admin", "editor"])
 * Output: ["ALICE"]
 * 
 * Key Requirements:
 * - Use `filter()`, `some()`, `map()`
 */

function getUsersWithRoles(users, targetRoles) {
  // Write your solution here
}

// Test Cases
console.log(getUsersWithRoles([{name: "alice", roles: ["admin"]}, {name: "bob", roles: ["guest"]}], ["admin", "editor"]));

module.exports = { getUsersWithRoles };
