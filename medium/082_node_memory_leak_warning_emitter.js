/**
 * Problem 082: Node Memory Leak Warning Emitter
 * Difficulty: Medium
 * Domain: Node.js Performance
 * Companies: Node.js Core
 * 
 * Problem Description:
 * Create `MemoryMonitor(maxHeapBytes)` class emitting warning events when heap memory usage exceeds threshold.
 * 
 * Example 1:
 * Input: const monitor = new MemoryMonitor(500 * 1024 * 1024); monitor.on('warning', data => ...);
 * Output: Emits warning when heapUsed > maxHeapBytes
 * 
 * Key Requirements:
 * - Use process.memoryUsage() periodically
 */

function MemoryMonitor(...args) {
  // Write your solution here
}

// Test Cases
// console.log(MemoryMonitor(/* test args */));

module.exports = { MemoryMonitor };
