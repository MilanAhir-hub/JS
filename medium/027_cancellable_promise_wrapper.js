/**
 * Problem 027: Cancellable Promise Wrapper
 * Difficulty: Medium
 * Domain: Async JS
 * Companies: RxJS, Meta
 * 
 * Problem Description:
 * Create `makeCancellable(promise)` returning `{ promise, cancel }` allowing caller to cancel pending promise resolution.
 * 
 * Example 1:
 * Input: const { promise, cancel } = makeCancellable(fetchData()); cancel();
 * Output: Rejects with 'CancelledError' if cancel() called before completion
 * 
 * Key Requirements:
 * - Prevent resolution/rejection callbacks from executing after cancellation
 */

function makeCancellable(...args) {
  // Write your solution here
}

// Test Cases
// console.log(makeCancellable(/* test args */));

module.exports = { makeCancellable };
