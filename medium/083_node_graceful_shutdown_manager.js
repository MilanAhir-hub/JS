/**
 * Problem 083: Node Graceful Shutdown Manager
 * Difficulty: Medium
 * Domain: Node.js Infrastructure
 * Companies: Kubernetes, AWS
 * 
 * Problem Description:
 * Create `GracefulShutdown(server, cleanupFns)` handling SIGTERM / SIGINT signals by closing HTTP server and running cleanup functions.
 * 
 * Example 1:
 * Input: const shutdown = new GracefulShutdown(server, [closeDbConnection]);
 * Output: Closes server and executes cleanup before process.exit(0)
 * 
 * Key Requirements:
 * - Listen to process SIGINT and SIGTERM signals
 */

function GracefulShutdown(...args) {
  // Write your solution here
}

// Test Cases
// console.log(GracefulShutdown(/* test args */));

module.exports = { GracefulShutdown };
