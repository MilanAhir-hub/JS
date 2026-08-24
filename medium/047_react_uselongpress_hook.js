/**
 * Problem 047: React useLongPress Hook
 * Difficulty: Medium
 * Domain: React Hooks
 * Companies: Meta, Uber
 * 
 * Problem Description:
 * Implement custom React hook `useLongPress(callback, options)` detecting long press / touch hold events.
 * 
 * Example 1:
 * Input: const longPressProps = useLongPress(() => showMenu(), { delay: 500 })
 * Output: Triggers callback if mouse/touch held for 500ms
 * 
 * Key Requirements:
 * - Clear timer on mouseup/mouseleave/touchend
 */

function useLongPress(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useLongPress(/* test args */));

module.exports = { useLongPress };
