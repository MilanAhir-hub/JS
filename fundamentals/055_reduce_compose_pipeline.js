/**
 * Problem 055: Pipeline Function Composition
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce())
 * 
 * Problem Description:
 * Write a function `pipe(fns, initialValue)` that passes `initialValue` sequentially through array of functions `fns` using `reduce()`.
 * 
 * Example:
 * Input: pipe([x => x + 1, x => x * 2], 5)
 * Output: 12
 * 
 * Key Requirements:
 * - Must use `reduce()`
 */

function pipe(fns, initialValue) {
  let result = fns.reduce((acc, current) =>{
    acc = current(acc);
    return acc;

  }, initialValue)

  return result;
}

// Test Cases
console.log(pipe([x => x + 1, x => x * 2], 5)); // Expected output: 12

module.exports = { pipe };
