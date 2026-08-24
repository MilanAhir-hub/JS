/**
 * Problem 018: Custom JSON.stringify Polyfill
 * Difficulty: Medium
 * Domain: JS Engine
 * Companies: Meta, Google
 * 
 * Problem Description:
 * Implement `jsonStringify(value)` handling primitives, objects, arrays, strings, booleans, null, and skipping functions/undefined in objects.
 * 
 * Example 1:
 * Input: jsonStringify({ a: 'hello', b: [1, 2], c: undefined })
 * Output: '{"a":"hello","b":[1,2]}'
 * 
 * Key Requirements:
 * - Escape special characters in strings
 * - Skip undefined, functions, symbol values in objects
 */

function jsonStringify(...args) {
  // Write your solution here
}

// Test Cases
// console.log(jsonStringify(/* test args */));

module.exports = { jsonStringify };
