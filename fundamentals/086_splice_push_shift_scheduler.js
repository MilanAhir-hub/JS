/**
 * Problem 086: Round Robin Task Execution
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (shift(), push())
 * 
 * Problem Description:
 * Write a function `runNextTask(queue)` that takes first task with `shift()`, appends it back to queue with `push()`, and returns executed task.
 * 
 * Example:
 * Input: const q = ["T1", "T2", "T3"]; runNextTask(q);
 * Output: "T1", q becomes ["T2", "T3", "T1"]
 * 
 * Key Requirements:
 * - Use `shift()` to get next task
 * - Use `push()` to place back at end of queue
 */

function runNextTask(queue) {
  // Write your solution here
}

// Test Cases
const q = ["T1", "T2", "T3"];
console.log(runNextTask(q)); // Expected output: "T1"

module.exports = { runNextTask };
