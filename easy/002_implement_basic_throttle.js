/**
 * Problem 002: Implement Basic Throttle
 * Difficulty: Easy
 * Domain: JS Core / Web APIs
 * Companies: Meta, Google, Airbnb
 * 
 * Problem Description:
 * Create a `throttle(fn, limit)` utility that ensures `fn` is executed at most once every `limit` milliseconds.
 * 
 * Example 1:
 * Input: throttle(log, 200)
 * Output: Executes at most once per 200ms
 * 
 * Key Requirements:
 * - Guarantee immediate first execution
 * - Ignore calls during cooling period
 */

// you can call the api only after surpassing the given delay

function throttle(func, delay) {
   let lastcall = 0;

   return function(...args){
    const now = Date.now();

    if(now - lastcall < delay){
      return;
    }

    lastcall = now;
    return func(...args);
   }
}

function searchChatMessage(message){
  console.log("Sending message: ", message)
}

const sendmessagewiththrottle = throttle(searchChatMessage, 2000);
sendmessagewiththrottle("Hello");
sendmessagewiththrottle("Hello milan");
sendmessagewiththrottle("Hello milan naranbhai");
sendmessagewiththrottle("kem che");
sendmessagewiththrottle("kem che majama ne");

// Test Cases
// console.log(throttle(/* test args */));

module.exports = { throttle };
