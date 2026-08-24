/**
 * Problem 019: Promise.race Polyfill
 * Difficulty: Easy
 * Domain: Async JS
 * Companies: Google, Amazon
 * 
 * Problem Description:
 * Implement `promiseRace(promises)` that returns a promise that fulfills or rejects as soon as one of the promises fulfills or rejects.
 * 
 * Example 1:
 * Input: promiseRace([p1, p2])
 * Output: Settles with first settled promise value/reason
 * 
 * Key Requirements:
 * - Return pending promise if empty array passed
 */

function promiseRace(...args) {
  // Write your solution here
}

// Test Cases
// console.log(promiseRace(/* test args */));

module.exports = { promiseRace };
