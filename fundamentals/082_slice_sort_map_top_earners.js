/**
 * Problem 082: Names of Top 3 Highest Earners
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (slice(), sort(), map())
 * 
 * Problem Description:
 * Write a function `getTopEarners(employees)` that sorts employees by `salary` descending, takes top 3, and returns array of their names.
 * 
 * Example:
 * Input: getTopEarners([{n: "A", s: 50}, {n: "B", s: 90}, {n: "C", s: 70}, {n: "D", s: 80}])
 * Output: ["B", "D", "C"]
 * 
 * Key Requirements:
 * - Use `slice()` to clone
 * - Use `sort()` by salary descending
 * - Use `slice(0, 3)`
 * - Use `map()` for names
 */

function getTopEarners(employees) {
  // Write your solution here
}

// Test Cases
console.log(getTopEarners([{n: "A", s: 50}, {n: "B", s: 90}, {n: "C", s: 70}, {n: "D", s: 80}])); // Expected output: ["B", "D", "C"]

module.exports = { getTopEarners };
