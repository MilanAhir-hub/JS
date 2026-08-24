/**
 * Problem 033: React useDebounce Hook with Flush & Cancel
 * Difficulty: Medium
 * Domain: React Hooks
 * Companies: Meta, Vercel
 * 
 * Problem Description:
 * Implement custom React hook `useDebounce(value, delay)` returning debounced value along with `flush` and `cancel` functions.
 * 
 * Example 1:
 * Input: const [debouncedVal, flush, cancel] = useDebounce(searchTerm, 300)
 * Output: Updates debouncedVal 300ms after searchTerm stops changing
 * 
 * Key Requirements:
 * - Cancel pending debounced timers on component unmount
 */

function useDebounce(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useDebounce(/* test args */));

module.exports = { useDebounce };
