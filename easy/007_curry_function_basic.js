/**
 * Problem 007: Curry Function (Basic)
 * Difficulty: Easy
 * Domain: Functional JS
 * Companies: Google, Amazon
 * 
 * Problem Description:
 * Implement a `curry` function that converts a function taking multiple arguments into a sequence of functions each taking a single argument.
 * 
 * Example 1:
 * Input: const curriedSum = curry((a, b) => a + b); curriedSum(1)(2)
 * Output: 3
 * 
 * Key Requirements:
 * - Return new function until required arity (fn.length) is reached
 */

function curry(...args) {
  // Write your solution here
}

// Test Cases
// console.log(curry(/* test args */));

module.exports = { curry };
