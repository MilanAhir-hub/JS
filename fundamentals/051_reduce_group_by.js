/**
 * Problem 051: Group Objects by Property
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce())
 * 
 * Problem Description:
 * Write a function `groupBy(items, key)` that groups an array of objects by property `key` using `reduce()`.
 * 
 * Example:
 * Input: groupBy([{g: "A", v: 1}, {g: "B", v: 2}, {g: "A", v: 3}], "g")
 * Output: { A: [{...}, {...}], B: [{...}] }
 * 
 * Key Requirements:
 * - Must use `reduce()`
 */

function groupBy(items, key) {
  // Write your solution here
}

// Test Cases
console.log(groupBy([{g: "A", v: 1}, {g: "B", v: 2}, {g: "A", v: 3}], "g"));

module.exports = { groupBy };
