/**
 * Problem 001: Implement Basic Debounce
 * Difficulty: Easy
 * Domain: JS Core / Web APIs
 * Companies: Meta, Uber, Amazon
 * 
 * Problem Description:
 * Create a `debounce(fn, delay)` utility that delays invoking `fn` until after `delay` milliseconds have elapsed since the last call.
 * 
 * Example 1:
 * Input: debounce(() => console.log('Hi'), 100)
 * Output: Logs 'Hi' once after 100ms
 * 
 * Key Requirements:
 * - Preserve `this` and arguments
 * - Clear existing timer on repeated invocation
 */

function debounce(fn, delay){
  let timer;

  return function(...args){
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args)
    }, delay);
  }
}

const search = (query) =>{
  console.log("Searching for ", query);
}

const searchWithDebounce = debounce(search, 1000);

searchWithDebounce("A");
searchWithDebounce("Ap");
searchWithDebounce("App");
searchWithDebounce("Appl");
searchWithDebounce("Apple");

// Test Cases
// console.log(debounce(/* test args */));

module.exports = { debounce };
