/**
 * Problem 089: Web Worker Promise Wrapper
 * Difficulty: Medium
 * Domain: Web Performance
 * Companies: Google, Meta
 * 
 * Problem Description:
 * Create `runInWorker(workerScriptUrl, data)` that executes task in Web Worker and returns Promise.
 * 
 * Example 1:
 * Input: await runInWorker('worker.js', { num: 42 })
 * Output: Resolves message returned by worker
 * 
 * Key Requirements:
 * - Instantiate Worker and listen to message / error events
 */

function runInWorker(...args) {
  // Write your solution here
}

// Test Cases
// console.log(runInWorker(/* test args */));

module.exports = { runInWorker };
