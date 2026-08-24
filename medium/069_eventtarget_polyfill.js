/**
 * Problem 069: EventTarget Polyfill
 * Difficulty: Medium
 * Domain: DOM APIs
 * Companies: Meta, Google
 * 
 * Problem Description:
 * Implement custom `EventTarget` class with `addEventListener`, `removeEventListener`, and `dispatchEvent`.
 * 
 * Example 1:
 * Input: const target = new EventTarget(); target.addEventListener('test', fn); target.dispatchEvent(new Event('test'));
 * Output: Dispatches event to listeners
 * 
 * Key Requirements:
 * - Support custom Event objects
 */

function EventTarget(...args) {
  // Write your solution here
}

// Test Cases
// console.log(EventTarget(/* test args */));

module.exports = { EventTarget };
