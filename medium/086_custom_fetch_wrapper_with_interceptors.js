/**
 * Problem 086: Custom Fetch Wrapper with Interceptors
 * Difficulty: Medium
 * Domain: Web APIs
 * Companies: Axios, Meta
 * 
 * Problem Description:
 * Implement `createHttpClient(baseUrl)` supporting request and response interceptor chains.
 * 
 * Example 1:
 * Input: const client = createHttpClient('https://api.com'); client.interceptors.request.use(config => ...);
 * Output: Runs request interceptors before fetching and response interceptors after
 * 
 * Key Requirements:
 * - Support multiple request and response interceptors
 */

function createHttpClient(...args) {
  // Write your solution here
}

// Test Cases
// console.log(createHttpClient(/* test args */));

module.exports = { createHttpClient };
