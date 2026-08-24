/**
 * Problem 009: Advanced EventEmitter
 * Difficulty: Medium
 * Domain: Node.js Architecture
 * Companies: Meta, Netflix, Uber
 * 
 * Problem Description:
 * Implement an advanced `EventEmitter` supporting `once`, `prependListener`, `removeAllListeners`, and `listenerCount`.
 * 
 * Example 1:
 * Input: emitter.once('login', handleLogin); emitter.prependListener('login', trace);
 * Output: trace executes before handleLogin, listener removed after 1 call
 * 
 * Key Requirements:
 * - Implement once() auto-unsubscribing wrapper
 * - Support prependListener to insert at start of listener array
 */

function EventEmitter(...args) {
  // Write your solution here
}

// Test Cases
// console.log(EventEmitter(/* test args */));

module.exports = { EventEmitter };
