/**
 * Problem 008: Memoize Function (Basic)
 * Difficulty: Easy
 * Domain: Performance JS
 * Companies: Meta, Amazon, Apple
 * 
 * Problem Description:
 * Create a `memoize(fn)` helper that caches the result of `fn` based on its arguments.
 * 
 * Example 1:
 * Input: const memoedAdd = memoize((a, b) => a + b); memoedAdd(2, 3)
 * Output: Returns 5 and caches result
 * 
 * Key Requirements:
 * - Use argument stringification or Map as cache key
 */

function memoize(...args) {
   const [fn] = args;
   const cache = new Map();

   return function(n){

    if(cache.has(n)){
      return cache.get(n)
    }

    const result = fn(n);
    cache.set(n,result);
    return result;

   }
}

// Test Cases
// console.log(memoize(/* test args */));

module.exports = { memoize };
