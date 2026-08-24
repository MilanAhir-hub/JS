/**
 * Problem 013: React useFetch Hook with Caching & Cancellation
 * Difficulty: Medium
 * Domain: React Architecture
 * Companies: Meta, Vercel
 * 
 * Problem Description:
 * Implement custom React hook `useFetch(url, options)` supporting data caching, loading state, error state, and `AbortController` cancellation.
 * 
 * Example 1:
 * Input: const { data, loading, error, refetch } = useFetch('/api/user')
 * Output: Fetches data, caches response, cancels pending request on url change
 * 
 * Key Requirements:
 * - Use AbortController to cancel inflight requests on unmount/url change
 * - Maintain in-memory cache to prevent duplicate requests
 */

function useFetch(...args) {
  // Write your solution here
}

// Test Cases
// console.log(useFetch(/* test args */));

module.exports = { useFetch };
