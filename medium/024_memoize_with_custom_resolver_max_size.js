/**
 * Problem 024: Memoize with Custom Resolver & Max Size
 * Difficulty: Medium
 * Domain: Advanced Performance JS
 * Companies: Meta, Google
 * 
 * Problem Description:
 * Implement `memoize(fn, options)` supporting custom cache key `resolver` function and `maxSize` LRU eviction.
 * 
 * Example 1:
 * Input: memoize(fn, { resolver: (...args) => args.join('-'), maxSize: 100 })
 * Output: Caches results with custom keys and evicts old entries when maxSize reached
 * 
 * Key Requirements:
 * - Use LRU policy to cap memory usage
 */

function memoize(...args) {
  // Write your solution here
}

// Test Cases
// console.log(memoize(/* test args */));

module.exports = { memoize };
