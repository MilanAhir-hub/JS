/**
 * Problem 064: Sort Words by Length
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (sort())
 * 
 * Problem Description:
 * Write a function `sortByLength(words)` that sorts array of strings by word length ascending using `sort()`.
 * 
 * Example:
 * Input: sortByLength(["elephant", "cat", "dog", "hippopotamus"])
 * Output: ["cat", "dog", "elephant", "hippopotamus"]
 * 
 * Key Requirements:
 * - Compare `a.length - b.length`
 */

function sortByLength(words) {
  return words.sort((a, b) => a.length - b.length);
}

// Test Cases
console.log(sortByLength(["elephant", "cat", "dog", "hippopotamus"]));

module.exports = { sortByLength };
