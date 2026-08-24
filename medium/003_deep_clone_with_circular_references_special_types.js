/**
 * Problem 003: Deep Clone with Circular References & Special Types
 * Difficulty: Medium
 * Domain: Advanced JS
 * Companies: Google, Meta, Apple
 * 
 * Problem Description:
 * Create a `deepClone` function that handles circular references, Date objects, RegExp, Maps, Sets, and Arrays.
 * 
 * Example 1:
 * Input: const obj = {}; obj.self = obj; const cloned = deepClone(obj);
 * Output: cloned.self === cloned (circular reference preserved)
 * 
 * Key Requirements:
 * - Use WeakMap to track visited objects and handle circular refs
 * - Properly clone Date, RegExp, Map, Set instances
 */

function deepClone(...args) {
  // Write your solution here
}

// Test Cases
// console.log(deepClone(/* test args */));

module.exports = { deepClone };
