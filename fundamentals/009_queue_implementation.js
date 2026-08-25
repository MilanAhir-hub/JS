/**
 * Problem 009: Simple Queue Class
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (push(), shift())
 * 
 * Problem Description:
 * Implement a `Queue` class with methods `enqueue(val)`, `dequeue()`, `front()`, and `isEmpty()`.
 * 
 * Example:
 * Input: const q = new Queue(); q.enqueue(1); q.enqueue(2); q.dequeue();
 * Output: 1
 * 
 * Key Requirements:
 * - Use `push()` for enqueue
 * - Use `shift()` for dequeue
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    if(this.items.length === 5){
      return "Overflow"
    }

    this.items.push(val);
  }

  dequeue() {
    if(this.items.length === 0){
      return "Underflow"
    }

    return this.items.shift();
  }

  front() {
    if(this.items.length === 0){
      return -1;
    }

    return items[0];
  }

  isEmpty() {
    if(this.items.length === 0){
      return true;
    }

    return false;
  }
}

// Test Cases
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue()); // Expected output: 1

module.exports = { Queue };
