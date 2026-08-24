/**
 * Problem 003: Simple Stack Class
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (push(), pop())
 * 
 * Problem Description:
 * Implement a `Stack` class with methods `push(val)`, `pop()`, `peek()`, and `isEmpty()`.
 * 
 * Example:
 * Input: const s = new Stack(); s.push(5); s.push(10); s.pop();
 * Output: 10
 * 
 * Key Requirements:
 * - Use `push()` and `pop()` internally
 * - peek() returns top element without removing
 */

class Stack {
  constructor() {

    this.items = [];
  }

  push(val) {

    if(this.items.length>5){
      return "Stack is full";
    }

    this.items.push(val);
  }

  pop() {

    if(this.items.length === 0){
      return "Underflow!"
    }

    return this.items.pop();
  }

  peek() {

    if(this.items.length === 0){
      return -1;
    }

    return this.items[this.items.length-1];
  }

  isEmpty() {

    if(this.items.length === 0){
      return true;
    }

    return false;
  }
}

// Test Cases
const s = new Stack();
s.push(5);
s.push(10);
console.log(s.pop()); // Expected output: 10

module.exports = { Stack };
