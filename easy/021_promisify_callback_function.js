/**
 * Problem 021: Promisify Callback Function
 * Difficulty: Easy
 * Domain: Node.js Async
 * Companies: Node.js Core, Amazon
 * 
 * Problem Description:
 * Implement `promisify(fn)` that converts an error-first node callback function into a promise-returning function.
 * 
 * Example 1:
 * Input: const readFileAsync = promisify(fs.readFile); await readFileAsync('file.txt')
 * Output: Resolves data or rejects error
 * 
 * Key Requirements:
 * - Follow (err, data) node callback convention
 */

function promisify(...args) {
  // Write your solution here
}

// Test Cases
// console.log(promisify(/* test args */));

module.exports = { promisify };
