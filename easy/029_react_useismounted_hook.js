/**
 * Problem 029: React useIsMounted Hook
 * Difficulty: Easy
 * Domain: React Hooks
 * Companies: Meta, Airbnb
 * 
 * Problem Description:
 * Implement custom React hook `useIsMounted()` that returns a callback returning `true` if component is mounted.
 * 
 * Example 1:
 * Input: const isMounted = useIsMounted(); if (isMounted()) setState(...)
 * Output: Prevents state updates on unmounted component
 * 
 * Key Requirements:
 * - Use useRef to track mounted state lifecycle
 */

function useIsMounted(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useIsMounted(/* test args */));

module.exports = { useIsMounted };
