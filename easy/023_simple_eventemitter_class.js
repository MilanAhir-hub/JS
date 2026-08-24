/**
 * Problem 023: Simple EventEmitter Class
 * Difficulty: Easy
 * Domain: Node.js Core
 * Companies: Meta, Netflix, Amazon
 * 
 * Problem Description:
 * Implement a basic `EventEmitter` class with `on`, `emit`, and `off` methods.
 * 
 * Example 1:
 * Input: const emitter = new EventEmitter(); emitter.on('event', listener); emitter.emit('event', data);
 * Output: Executes listener with data
 * 
 * Key Requirements:
 * - Support multiple listeners per event name
 * - Allow unsubscribing via `off`
 */

function EventEmitter(...args) {
  // Write your solution here
}

// Test Cases
// console.log(EventEmitter(/* test args */));

module.exports = { EventEmitter };
