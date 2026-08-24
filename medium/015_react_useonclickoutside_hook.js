/**
 * Problem 015: React useOnClickOutside Hook
 * Difficulty: Medium
 * Domain: React Hooks
 * Companies: Meta, Airbnb
 * 
 * Problem Description:
 * Implement custom React hook `useOnClickOutside(ref, handler)` that detects clicks outside specified DOM element.
 * 
 * Example 1:
 * Input: useOnClickOutside(modalRef, () => setOpen(false))
 * Output: Triggers handler when user clicks outside modal element
 * 
 * Key Requirements:
 * - Attach mousedown/touchstart listeners to document
 * - Check if target is contained within ref.current
 */

function useOnClickOutside(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useOnClickOutside(/* test args */));

module.exports = { useOnClickOutside };
