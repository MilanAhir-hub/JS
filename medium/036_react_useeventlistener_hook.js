/**
 * Problem 036: React useEventListener Hook
 * Difficulty: Medium
 * Domain: React Hooks
 * Companies: Meta, Vercel
 * 
 * Problem Description:
 * Implement custom React hook `useEventListener(eventName, handler, element)` handling event registration safely.
 * 
 * Example 1:
 * Input: useEventListener('keydown', handleKeyDown, window)
 * Output: Attaches keydown listener to window and cleans up on unmount
 * 
 * Key Requirements:
 * - Use useRef to store latest handler reference
 */

function useEventListener(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useEventListener(/* test args */));

module.exports = { useEventListener };
