/**
 * Problem 016: React useIntersectionObserver Hook
 * Difficulty: Medium
 * Domain: React Hooks
 * Companies: Meta, Vercel
 * 
 * Problem Description:
 * Implement custom React hook `useIntersectionObserver(ref, options)` tracking element visibility in viewport.
 * 
 * Example 1:
 * Input: const { isIntersecting, entry } = useIntersectionObserver(targetRef, { threshold: 0.5 })
 * Output: Returns true when 50% of element is visible
 * 
 * Key Requirements:
 * - Use native IntersectionObserver API
 * - Disconnect observer on unmount
 */

function useIntersectionObserver(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useIntersectionObserver(/* test args */));

module.exports = { useIntersectionObserver };
