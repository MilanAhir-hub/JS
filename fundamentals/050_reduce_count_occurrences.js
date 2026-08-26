/**
 * Problem 050: Count Frequency of Items
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce())
 * 
 * Problem Description:
 * Write a function `countFrequencies(items)` that returns an object mapping item string to occurrence count using `reduce()`.
 * 
 * Example:
 * Input: countFrequencies(["a", "b", "a", "c", "b", "a"])
 * Output: { a: 3, b: 2, c: 1 }
 * 
 * Key Requirements:
 * - Must use `reduce()` with initial value `{}`
 */

function countFrequencies(items) {
  let result = items.reduce((acc, current) =>{
    if(acc[current]){
      acc[current] = acc[current] + 1;
    }else{
      acc[current] = 1;
    }

    return acc;
  }, {})

  return result;
}

// Test Cases
console.log(countFrequencies(["a", "b", "a", "c", "b", "a"])); // Expected output: { a: 3, b: 2, c: 1 }

module.exports = { countFrequencies };
