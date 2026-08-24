/**
 * Problem 040: Node Stream Pipe Transform Wrapper
 * Difficulty: Medium
 * Domain: Node.js Streams
 * Companies: Node.js Core
 * 
 * Problem Description:
 * Create a custom Node.js `Transform` stream class `UpperCasifyStream` that converts incoming text chunks to uppercase.
 * 
 * Example 1:
 * Input: readStream.pipe(new UpperCasifyStream()).pipe(writeStream)
 * Output: Transforms stream chunks to uppercase text
 * 
 * Key Requirements:
 * - Override _transform(chunk, encoding, callback) method
 */

function UpperCasifyStream(...args) {
  // Write your solution here
}

// Test Cases
// console.log(UpperCasifyStream(/* test args */));

module.exports = { UpperCasifyStream };
