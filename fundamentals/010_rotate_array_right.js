/**
 * Problem 010: Rotate Array Right by K
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (pop(), unshift())
 * 
 * Problem Description:
 * Write a function `rotateRight(arr, k)` that rotates an array to the right by `k` steps using `pop()` and `unshift()`.
 * 
 * Example:
 * Input: rotateRight([1, 2, 3, 4, 5], 2)
 * Output: [4, 5, 1, 2, 3]
 * 
 * Key Requirements:
 * - Must use `pop()` and `unshift()`
 * - Handle k larger than array length
 */

function rotateRight(arr, k) {
  k = k%arr.length;

  while(k > 0){
    let element = arr.pop();
    arr.unshift(element);

    k--;
  }

  return arr;
}

// Test Cases
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // Expected output: [4, 5, 1, 2, 3]

module.exports = { rotateRight };
