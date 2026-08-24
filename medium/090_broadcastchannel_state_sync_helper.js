/**
 * Problem 090: BroadcastChannel State Sync Helper
 * Difficulty: Medium
 * Domain: Web APIs
 * Companies: Meta, Figma
 * 
 * Problem Description:
 * Create `createTabChannel(channelName, onMessage)` simplifying cross-tab message passing using `BroadcastChannel`.
 * 
 * Example 1:
 * Input: const channel = createTabChannel('app_state', msg => console.log(msg)); channel.post('update');
 * Output: Broadcasts messages to other open browser tabs
 * 
 * Key Requirements:
 * - Use BroadcastChannel API with fallback
 */

function createTabChannel(...args) {
  // Write your solution here
}

// Test Cases
// console.log(createTabChannel(/* test args */));

module.exports = { createTabChannel };
