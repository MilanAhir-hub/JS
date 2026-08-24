/**
 * Problem 041: Node File Watcher with Debounced Callbacks
 * Difficulty: Medium
 * Domain: Node.js Systems
 * Companies: Chokidar, Vercel
 * 
 * Problem Description:
 * Create `watchDirectory(dirPath, onChange)` helper using `fs.watch` with debounced notification events.
 * 
 * Example 1:
 * Input: watchDirectory('./src', event => console.log('File changed:', event))
 * Output: Debounces file change events to avoid duplicate triggers
 * 
 * Key Requirements:
 * - Aggregate rapid fs.watch events using debounce
 */

function watchDirectory(...args) {
  // Write your solution here
}

// Test Cases
// console.log(watchDirectory(/* test args */));

module.exports = { watchDirectory };
