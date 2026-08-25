/**
 * Problem 014: Extract Last N Items
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (slice())
 * 
 * Problem Description:
 * Write a function `getLastN(arr, n)` that returns the last `n` elements of `arr` using negative indices in `slice()`.
 * 
 * Example:
 * Input: getLastN(["a", "b", "c", "d", "e"], 3)
 * Output: ["c", "d", "e"]
 * 
 * Key Requirements:
 * - Use `slice(-n)`
 * - Return copy of full array if n >= length
 */

function getLastN(arr, n) {
  if(arr.length < n){
    return arr;
  }

  return arr.slice(-n);
}

// Test Cases
console.log(getLastN(["a", "b", "c", "d", "e"], 3)); // Expected output: ["c", "d", "e"]

module.exports = { getLastN };
