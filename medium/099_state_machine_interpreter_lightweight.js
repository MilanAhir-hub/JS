/**
 * Problem 099: State Machine Interpreter (Lightweight)
 * Difficulty: Medium
 * Domain: Architecture
 * Companies: XState, Meta
 * 
 * Problem Description:
 * Implement `createStateMachine(config)` with `transition(currentState, event)`.
 * 
 * Example 1:
 * Input: const machine = createStateMachine({ initial: 'idle', states: { idle: { FETCH: 'loading' } } }); machine.transition('idle', 'FETCH');
 * Output: 'loading'
 * 
 * Key Requirements:
 * - Return next state based on current state and event
 */

function createStateMachine(...args) {
  // Write your solution here
}

// Test Cases
// console.log(createStateMachine(/* test args */));

module.exports = { createStateMachine };
