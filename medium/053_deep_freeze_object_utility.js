/**
 * Problem 053: Deep Freeze Object Utility
 * Difficulty: Medium
 * Domain: Immutability
 * Companies: Redux, Meta
 * 
 * Problem Description:
 * Implement `deepFreeze(obj)` that recursively calls `Object.freeze` on an object and all nested properties.
 * 
 * Example 1:
 * Input: const obj = deepFreeze({ a: { b: 1 } }); obj.a.b = 2;
 * Output: Throws error in strict mode; obj remains unchanged
 * 
 * Key Requirements:
 * - Recursively freeze nested objects and functions
 */

function deepFreeze(...args) {
  // Write your solution here
}

// Test Cases
// console.log(deepFreeze(/* test args */));

module.exports = { deepFreeze };
