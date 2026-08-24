/**
 * Problem 017: Redux createStore from Scratch
 * Difficulty: Medium
 * Domain: React Architecture
 * Companies: Meta, Redux
 * 
 * Problem Description:
 * Implement `createStore(reducer, initialState)` function returning `{ getState, dispatch, subscribe }`.
 * 
 * Example 1:
 * Input: const store = createStore(counterReducer, { count: 0 }); store.subscribe(() => console.log(store.getState())); store.dispatch({ type: 'INC' });
 * Output: Logs updated state `{ count: 1 }`
 * 
 * Key Requirements:
 * - Maintain current state and subscribers array
 * - Execute reducer on dispatch and notify all subscribers
 */

function createStore(...args) {
  // Write your solution here
}

// Test Cases
// console.log(createStore(/* test args */));

module.exports = { createStore };
