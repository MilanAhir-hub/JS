/**
 * Problem 019: Virtual DOM Diff Algorithm
 * Difficulty: Medium
 * Domain: Frontend Engineering
 * Companies: Meta, Vercel
 * 
 * Problem Description:
 * Implement `diff(oldVNode, newVNode)` returning list of DOM patch operations (CREATE, REMOVE, REPLACE, UPDATE).
 * 
 * Example 1:
 * Input: diff({ type: 'div', props: { id: 'a' } }, { type: 'div', props: { id: 'b' } })
 * Output: [{ type: 'UPDATE_PROPS', props: { id: 'b' } }]
 * 
 * Key Requirements:
 * - Compare node types, props, and children recursively
 */

function diff(...args) {
  // Write your solution here
}

// Test Cases
// console.log(diff(/* test args */));

module.exports = { diff };
