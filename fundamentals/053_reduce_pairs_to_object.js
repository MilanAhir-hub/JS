/**
 * Problem 053: Pairs Array to Object
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce())
 * 
 * Problem Description:
 * Write a function `pairsToObject(pairs)` that converts `[[key, val], ...]` into an object using `reduce()`.
 * 
 * Example:
 * Input: pairsToObject([["name", "Alice"], ["age", 25]])
 * Output: { name: "Alice", age: 25 }
 * 
 * Key Requirements:
 * - Must use `reduce()`
 */

function pairsToObject(pairs) {
  let result = pairs.reduce((acc, current) =>{
    acc[current[0]] = current[1];

    return acc;
  }, {});

  return result;
}

// Test Cases
console.log(pairsToObject([["name", "Alice"], ["age", 25]])); // Expected output: { name: "Alice", age: 25 }

module.exports = { pairsToObject };
