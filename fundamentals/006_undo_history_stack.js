/**
 * Problem 006: Bounded History Tracker
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (push(), shift())
 * 
 * Problem Description:
 * Write a function `addHistory(history, action, limit)` that adds `action` to `history`. If history length exceeds `limit`, remove oldest action using `shift()`.
 * 
 * Example:
 * Input: addHistory(["a", "b", "c"], "d", 3)
 * Output: ["b", "c", "d"]
 * 
 * Key Requirements:
 * - Use `push()` to add new action
 * - Use `shift()` to remove oldest if exceeding limit
 */

// shift is used to remove the first element of an array and it will return that element

function addHistory(history, action, limit) {
  history.push(action);

  while(history.length>limit){
    history.shift();
  }

  return history;
}

// Test Cases
console.log(addHistory(["a", "b", "c", "d"], "e", 3)); // Expected output: ["b", "c", "d"]

module.exports = { addHistory };
