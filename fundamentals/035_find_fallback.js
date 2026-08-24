/**
 * Problem 035: Find with Default Fallback
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (find())
 * 
 * Problem Description:
 * Write a function `findUserOrDefault(users, id, fallback)` that finds user by `id` using `find()`, returning `fallback` if not found.
 * 
 * Example:
 * Input: findUserOrDefault([{id: 1, name: "A"}], 99, {id: 0, name: "Guest"})
 * Output: {id: 0, name: "Guest"}
 * 
 * Key Requirements:
 * - Must use `find()`
 * - Return fallback object if undefined
 */

function findUserOrDefault(users, id, fallback) {
  // Write your solution here
}

// Test Cases
console.log(findUserOrDefault([{id: 1, name: "A"}], 99, {id: 0, name: "Guest"})); // Expected output: {id: 0, name: "Guest"}

module.exports = { findUserOrDefault };
