/**
 * Problem 098: React Virtual Scroller Hook
 * Difficulty: Medium
 * Domain: React Performance
 * Companies: Meta, Twitter
 * 
 * Problem Description:
 * Implement custom React hook `useVirtualList({ itemHeight, totalItems, viewportHeight, scrollTop })`.
 * 
 * Example 1:
 * Input: const { startIndex, endIndex, offsetY } = useVirtualList({ itemHeight: 50, totalItems: 1000, viewportHeight: 500, scrollTop: 200 })
 * Output: Calculates visible items range for rendering 1000 items efficiently
 * 
 * Key Requirements:
 * - Calculate visible start and end indices based on scroll position
 */

function useVirtualList(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useVirtualList(/* test args */));

module.exports = { useVirtualList };
