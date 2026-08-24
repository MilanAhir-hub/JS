/**
 * Problem 038: Observable / RxJS Subject from Scratch
 * Difficulty: Medium
 * Domain: Reactive Programming
 * Companies: Netflix, Google
 * 
 * Problem Description:
 * Implement `Subject` class with `subscribe(observer)`, `next(value)`, `error(err)`, `complete()`.
 * 
 * Example 1:
 * Input: const subject = new Subject(); subject.subscribe({ next: console.log }); subject.next('Hello');
 * Output: Emits values to all subscribed observers
 * 
 * Key Requirements:
 * - Maintain array of observers and notify on next()
 */

function Subject(...args) {
  // Write your solution here
}

// Test Cases
// console.log(Subject(/* test args */));

module.exports = { Subject };
