/**
 * Problem 095: Extract Sub-array Between Markers
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (includes(), indexOf(), slice())
 * 
 * Problem Description:
 * Write a function `extractBetween(arr, startMarker, endMarker)` that checks both markers exist with `includes()`, finds their positions with `indexOf()`, and returns slice between them (exclusive).
 * 
 * Example:
 * Input: extractBetween(["START", "a", "b", "END"], "START", "END")
 * Output: ["a", "b"]
 * 
 * Key Requirements:
 * - Check presence with `includes()`
 * - Locate indices with `indexOf()`
 * - Return `slice(startIdx + 1, endIdx)`
 */

function extractBetween(arr, startMarker, endMarker) {
  // Write your solution here
}

// Test Cases
console.log(extractBetween(["START", "a", "b", "END"], "START", "END"));

module.exports = { extractBetween };
