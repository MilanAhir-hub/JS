/**
 * Problem 077: React useDebounceValue Hook
 * Difficulty: Medium
 * Domain: React Hooks
 * Companies: Meta, Vercel
 * 
 * Problem Description:
 * Implement custom React hook `useDebounceValue(value, delay)` returning debounced value state.
 * 
 * Example 1:
 * Input: const debouncedQuery = useDebounceValue(query, 500)
 * Output: Updates debouncedQuery 500ms after query stops changing
 * 
 * Key Requirements:
 * - Clear timeout on unmount or value change
 */

function useDebounceValue(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useDebounceValue(/* test args */));

module.exports = { useDebounceValue };
