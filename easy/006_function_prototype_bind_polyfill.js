/**
 * Problem 006: Function.prototype.bind Polyfill
 * Difficulty: Easy
 * Domain: JS Core / Polyfills
 * Companies: Meta, Microsoft, Uber
 * 
 * Problem Description:
 * Implement `myBind` polyfill on Function prototype that creates a new function with bound `this` context and partial arguments.
 * 
 * Example 1:
 * Input: fn.myBind(context, arg1)(arg2)
 * Output: Executes fn with bound context and arg1, arg2
 * 
 * Key Requirements:
 * - Support partial application (currying args)
 * - Maintain correct prototype chain if used as constructor with `new`
 */

function myBind(...args) {
  const [fn, context] = args;

  return function(){
    fn.call(context);
  }
}

// Test Cases
// console.log(myBind(/* test args */));

module.exports = { myBind };

const person = {
  name: "Milan",
  
  sayHello : function(){
    console.log(this.name)
  }
}

const fn = myBind(person.sayHello, person);
fn();
 