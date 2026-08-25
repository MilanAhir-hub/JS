/**
 * Problem 026: Check Missing Item Index
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (indexOf())
 * 
 * Problem Description:
 * Write a function `isMissing(arr, target)` that returns `true` if `indexOf(target)` returns -1.
 * 
 * Example:
 * Input: isMissing([10, 20, 30], 40)
 * Output: true
 * 
 * Key Requirements:
 * - Must check `indexOf() === -1`
 */

// function isMissing(arr, target) {
//   return arr.indexOf(target) === -1;
// }

function isMissing(arr, target){
  let result = true;

  for(let i = 0; i<arr.length; i++){
    if(arr[i] == target){
      result = false;
      break;
    }
  }

  return result;
}

// Test Cases
console.log(isMissing([10, 20, 30], 40)); // Expected output: true

module.exports = { isMissing };
