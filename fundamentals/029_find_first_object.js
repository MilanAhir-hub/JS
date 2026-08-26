/**
 * Problem 029: Find Object by ID
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (find())
 * 
 * Problem Description:
 * Write a function `findUserById(users, id)` that returns the user object with matching `id` using `find()`.
 * 
 * Example:
 * Input: findUserById([{id: 1, name: "Alice"}, {id: 2, name: "Bob"}], 2)
 * Output: {id: 2, name: "Bob"}
 * 
 * Key Requirements:
 * - Must use `find()`
 * - Return undefined if not found
 */

function findUserById(users, id) {
  
  for(let user of users){
    if(user.id === id){
      return user;
    }
  }

  return undefined;
}

// Test Cases
console.log(findUserById([{id: 1, name: "Alice"}, {id: 2, name: "Bob"}], 5)); // Expected output: undefined

module.exports = { findUserById };
