/**
 * Problem 015: Remove Item at Index with Splice
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (splice())
 * 
 * Problem Description:
 * Write a function `removeAtIndex(arr, index)` that removes 1 element at position `index` using `splice()` and returns the deleted element.
 * 
 * Example:
 * Input: removeAtIndex(["apple", "banana", "cherry"], 1)
 * Output: "banana"
 * 
 * Key Requirements:
 * - Must use `splice()`
 * - Mutates original array
 */

function removeAtIndex(arr, index) {
  if(index < 0 || arr.length < index){
    return -1;
  }

  return arr.splice(index, 1);
}

// Test Cases
console.log(removeAtIndex(["apple", "banana", "cherry"], 1)); // Expected output: "banana"

module.exports = { removeAtIndex };
