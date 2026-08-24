/**
 * Problem 004: Reverse Array using Stack Operations
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (push(), pop())
 * 
 * Problem Description:
 * Write a function `reverseWithStack(arr)` that reverses an array using `push()` and `pop()`.
 * 
 * Example:
 * Input: reverseWithStack([1, 2, 3, 4])
 * Output: [4, 3, 2, 1]
 * 
 * Key Requirements:
 * - Do not use Array.prototype.reverse()
 * - Use pop() to retrieve items in backwards order
 */

function reverseWithStack(arr) {
   const stack = [];

   for(let item of arr){
    stack.push(item);
   }

  const reverse = [];

  while(stack.length){
    reverse.push(stack.pop());
  }

  return reverse;
}

// Test Cases
console.log(reverseWithStack([1, 2, 3, 4])); // Expected output: [4, 3, 2, 1]

module.exports = { reverseWithStack };
