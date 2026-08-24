/**
 * Problem 093: React useCopyToClipboard Hook
 * Difficulty: Easy
 * Domain: React Hooks
 * Companies: Meta, Stripe
 * 
 * Problem Description:
 * Implement custom React hook `useCopyToClipboard()` returning `[copiedText, copyFn]`.
 * 
 * Example 1:
 * Input: const [text, copy] = useCopyToClipboard(); copy('Hello')
 * Output: Copies text to clipboard and updates state
 * 
 * Key Requirements:
 * - Use navigator.clipboard.writeText API
 */

function useCopyToClipboard(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useCopyToClipboard(/* test args */));

module.exports = { useCopyToClipboard };
