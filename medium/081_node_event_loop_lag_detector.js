/**
 * Problem 081: Node Event Loop Lag Detector
 * Difficulty: Medium
 * Domain: Node.js Performance
 * Companies: Node.js Core
 * 
 * Problem Description:
 * Create `monitorEventLoop(intervalMs, thresholdMs, onLag)` detecting event loop blockages.
 * 
 * Example 1:
 * Input: monitorEventLoop(1000, 50, lag => console.warn('Lag detected:', lag))
 * Output: Measures delay between setTimers and expected time
 * 
 * Key Requirements:
 * - Calculate delta between actual execution time and expected timer delay
 */

function monitorEventLoop(...args) {
  // Write your solution here
}

// Test Cases
// console.log(monitorEventLoop(/* test args */));

module.exports = { monitorEventLoop };
