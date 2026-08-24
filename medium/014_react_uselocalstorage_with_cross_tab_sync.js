/**
 * Problem 014: React useLocalStorage with Cross-Tab Sync
 * Difficulty: Medium
 * Domain: React Hooks
 * Companies: Meta, Stripe
 * 
 * Problem Description:
 * Implement custom React hook `useLocalStorage(key, initialValue)` that synchronizes state across browser tabs via `storage` event.
 * 
 * Example 1:
 * Input: const [name, setName] = useLocalStorage('username', 'Guest')
 * Output: Updates localStorage and syncs with other open browser tabs
 * 
 * Key Requirements:
 * - Listen to window 'storage' event for cross-tab updates
 * - Handle JSON serialization errors gracefully
 */

function useLocalStorage(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useLocalStorage(/* test args */));

module.exports = { useLocalStorage };
