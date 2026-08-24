/**
 * Problem 100: Micro Frontend Event Bus
 * Difficulty: Medium
 * Domain: Architecture
 * Companies: Single-SPA, Amazon, Meta
 * 
 * Problem Description:
 * Implement `MicroFrontendEventBus` singleton enabling isolated micro-frontends to exchange events safely.
 * 
 * Example 1:
 * Input: MicroFrontendEventBus.emit('USER_LOGGED_IN', { id: 1 }); MicroFrontendEventBus.on('USER_LOGGED_IN', fn);
 * Output: Dispatches events across micro-frontends
 * 
 * Key Requirements:
 * - Use window global instance with namespaced event channels
 */

function MicroFrontendEventBus(...args) {
  // Write your solution here
}

// Test Cases
// console.log(MicroFrontendEventBus(/* test args */));

module.exports = { MicroFrontendEventBus };
