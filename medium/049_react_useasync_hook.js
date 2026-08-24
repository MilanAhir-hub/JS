/**
 * Problem 049: React useAsync Hook
 * Difficulty: Medium
 * Domain: React Hooks
 * Companies: Meta, Stripe
 * 
 * Problem Description:
 * Implement custom React hook `useAsync(asyncFn, immediate)` returning `{ execute, status, value, error }`.
 * 
 * Example 1:
 * Input: const { execute, status, value } = useAsync(fetchUser, false); execute();
 * Output: Tracks PENDING, SUCCESS, ERROR async states
 * 
 * Key Requirements:
 * - Wrap async execution in clean state transitions
 */

function useAsync(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useAsync(/* test args */));

module.exports = { useAsync };
