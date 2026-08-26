/**
 * Problem 033: Validate All Strings Non-Empty
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (every())
 * 
 * Problem Description:
 * Write a function `allNonEmpty(strings)` that checks if every string has `length > 0` after trim using `every()`.
 * 
 * Example:
 * Input: allNonEmpty(["hello", "world", " "])
 * Output: false
 * 
 * Key Requirements:
 * - Must use `every()`
 * - Check `str.trim().length > 0`
 */

function allNonEmpty(strings) {
  let result = strings.every(str=> str.trim().length>0);

  return result;
}

// Test Cases
console.log(allNonEmpty(["hello", "world", " "])); // Expected output: false

module.exports = { allNonEmpty };
