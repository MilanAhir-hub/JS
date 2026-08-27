/**
 * Problem 052: Flatten 2D Array with Reduce
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce(), concat())
 * 
 * Problem Description:
 * Write a function `flatten2D(arrays)` that flattens a 2D array using `reduce()` and `concat()`.
 * 
 * Example:
 * Input: flatten2D([[1, 2], [3, 4], [5]])
 * Output: [1, 2, 3, 4, 5]
 * 
 * Key Requirements:
 * - Use `reduce()` and `concat()`
 */

function flatten2D(arrays) {
  let result = arrays.reduce((acc, current) =>{
    acc = acc.concat(current);

    return acc;
  }, [])

  return result;
}

// Test Cases
console.log(flatten2D([[1, 2], [3, 4], [5]])); // Expected output: [1, 2, 3, 4, 5]

module.exports = { flatten2D };
