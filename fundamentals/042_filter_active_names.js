/**
 * Problem 042: Get Active User Names
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter(), map())
 * 
 * Problem Description:
 * Write a function `getActiveNames(users)` that filters active users and returns array of user names using `filter()` and `map()`.
 * 
 * Example:
 * Input: getActiveNames([{name: "A", active: true}, {name: "B", active: false}])
 * Output: ["A"]
 * 
 * Key Requirements:
 * - Chain `filter()` and `map()`
 */

function getActiveNames(users) {
  let result = users.filter(user => user['active'] === true).map(user => user['name']);

  return result;
}

// Test Cases
console.log(getActiveNames([{name: "A", active: true}, {name: "B", active: false}])); // Expected output: ["A"]

module.exports = { getActiveNames };
