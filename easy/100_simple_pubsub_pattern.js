/**
 * Problem 100: Simple PubSub Pattern
 * Difficulty: Easy
 * Domain: Design Patterns
 * Companies: Meta, Uber, Google
 * 
 * Problem Description:
 * Create `PubSub` class with `subscribe(event, callback)` and `publish(event, data)`.
 * 
 * Example 1:
 * Input: const pubsub = new PubSub(); const sub = pubsub.subscribe('msg', console.log); pubsub.publish('msg', 'Hi'); sub.unsubscribe();
 * Output: Delivers data to subscribers
 * 
 * Key Requirements:
 * - Return unsubscribe handle from subscribe()
 */

function PubSub(...args) {
  // Write your solution here
}

// Test Cases
// console.log(PubSub(/* test args */));

module.exports = { PubSub };
