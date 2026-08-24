/**
 * Problem 093: ResizeObserver Hook Utility
 * Difficulty: Medium
 * Domain: Web APIs
 * Companies: Meta, Vercel
 * 
 * Problem Description:
 * Create `observeResize(element, callback)` helper tracking DOM element size changes.
 * 
 * Example 1:
 * Input: const unobserve = observeResize(myDiv, rect => console.log(rect.width));
 * Output: Fires callback whenever element dimensions change
 * 
 * Key Requirements:
 * - Use ResizeObserver API and return unobserve cleanup function
 */

function observeResize(...args) {
  // Write your solution here
}

// Test Cases
// console.log(observeResize(/* test args */));

module.exports = { observeResize };
