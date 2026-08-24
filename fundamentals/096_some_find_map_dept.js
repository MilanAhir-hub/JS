/**
 * Problem 096: List Team Members of Active Department
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (some(), find(), map())
 * 
 * Problem Description:
 * Write a function `getDepartmentMembers(departments, deptId)` that checks department existence, finds object with `find()`, and maps member names using `map()`.
 * 
 * Example:
 * Input: getDepartmentMembers([{id: "engineering", members: [{name: "Alice"}, {name: "Bob"}]}], "engineering")
 * Output: ["Alice", "Bob"]
 * 
 * Key Requirements:
 * - Use `find()` to retrieve department
 * - Use `map()` to pluck member names
 */

function getDepartmentMembers(departments, deptId) {
  // Write your solution here
}

// Test Cases
console.log(getDepartmentMembers([{id: "engineering", members: [{name: "Alice"}, {name: "Bob"}]}], "engineering"));

module.exports = { getDepartmentMembers };
