/**
 * Problem 025: Search Index with Offset
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (indexOf())
 * 
 * Problem Description:
 * Write a function `findNextIndex(arr, target, startFrom)` that searches `target` in `arr` starting from position `startFrom` using `indexOf()`.
 * 
 * Example:
 * Input: findNextIndex(["a", "b", "c", "b"], "b", 2)
 * Output: 3
 * 
 * Key Requirements:
 * - Must use `indexOf(target, startFrom)`
 * - Return index or -1
 */

// function findNextIndex(arr, target, startFrom) {
//   return arr.indexOf(target, startFrom);
// }

function findNextIndex(arr, target, startFrom){

  for(let i=startFrom; i<arr.length; i++){
    if(arr[i] == target){
      return i;
    }
  }

  return -1;

}

// Test Cases
console.log(findNextIndex(["a", "b", "c", "b"], "b", 2)); // Expected output: 3

module.exports = { findNextIndex };
