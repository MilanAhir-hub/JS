/**
 * Problem 036: Validate Score Thresholds
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (some(), every())
 * 
 * Problem Description:
 * Write a function `validateScores(scores)` that returns `true` if `every` score >= 50 AND `some` score >= 90.
 * 
 * Example:
 * Input: validateScores([55, 60, 92, 70])
 * Output: true
 * 
 * Key Requirements:
 * - Use `every()` for minimum score check
 * - Use `some()` for high score check
 */

function validateScores(scores) {
  let result = scores.every(score => score>=50) && scores.some(score => score>=50);

  return result;
}

// Test Cases
console.log(validateScores([55, 60, 92, 70])); // Expected output: true

module.exports = { validateScores };
