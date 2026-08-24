/**
 * Problem 094: React usePageLeave Hook
 * Difficulty: Easy
 * Domain: React Hooks
 * Companies: Meta, Shopify
 * 
 * Problem Description:
 * Implement custom React hook `usePageLeave(onLeave)` that detects when mouse leaves document viewport.
 * 
 * Example 1:
 * Input: usePageLeave(() => showExitModal())
 * Output: Triggers on mouseout of document body
 * 
 * Key Requirements:
 * - Check e.clientY <= 0 on mouseleave
 */

function usePageLeave(...args) {
  // Write your solution here
}

// Test Cases
// console.log(usePageLeave(/* test args */));

module.exports = { usePageLeave };
