/**
 * Problem 056: Unique Items with Reduce & Includes
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce(), includes())
 * 
 * Problem Description:
 * Write a function `removeDuplicates(items)` that returns array with duplicates removed using `reduce()` and `includes()`.
 * 
 * Example:
 * Input: removeDuplicates([1, 2, 2, 3, 1, 4])
 * Output: [1, 2, 3, 4]
 * 
 * Key Requirements:
 * - Use `reduce()` and `includes()`
 */

function removeDuplicates(items) {
  let result = items.reduce((acc, current) =>{
    if(!acc.includes(current)){
      acc.push(current);
    }
    return acc;
  }, []);

  return result;
}

// Test Cases
console.log(removeDuplicates([1, 2, 2, 3, 1, 4])); // Expected output: [1, 2, 3, 4]

module.exports = { removeDuplicates };
