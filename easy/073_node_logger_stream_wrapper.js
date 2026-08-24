/**
 * Problem 073: Node Logger Stream Wrapper
 * Difficulty: Easy
 * Domain: Node.js Streams
 * Companies: Node.js Core
 * 
 * Problem Description:
 * Create `LoggerStream(writableStream)` that prefixes logged output with ISO timestamps.
 * 
 * Example 1:
 * Input: const logger = new LoggerStream(process.stdout); logger.write('Hello');
 * Output: Outputs '[2026-08-23T20:00:00.000Z] Hello'
 * 
 * Key Requirements:
 * - Inherit from or wrap Transform stream
 */

function LoggerStream(...args) {
  // Write your solution here
}

// Test Cases
// console.log(LoggerStream(/* test args */));

module.exports = { LoggerStream };
