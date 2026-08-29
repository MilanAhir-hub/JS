/**
 * Problem 067: Array Intersection
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter(), includes())
 * 
 * Problem Description:
 * Write a function `intersection(arr1, arr2)` that returns elements present in both arrays using `filter()` and `includes()`.
 * 
 * Example:
 * Input: intersection([1, 2, 3, 4], [3, 4, 5, 6])
 * Output: [3, 4]
 * 
 * Key Requirements:
 * - Use `filter()` on arr1 with `arr2.includes()`
 */

function intersection(arr1, arr2) {
  let result = [];

  for(let dig of arr1){
    if(arr2.includes(dig)){
      result.push(dig);
    }
  }

  return result;
}

// Test Cases
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // Expected output: [3, 4]

module.exports = { intersection };
