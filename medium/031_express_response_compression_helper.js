/**
 * Problem 031: Express Response Compression Helper
 * Difficulty: Medium
 * Domain: Express.js
 * Companies: Compression, Node.js
 * 
 * Problem Description:
 * Create Express middleware `gzipCompression` that compresses response body using Node.js `zlib` if `Accept-Encoding: gzip`.
 * 
 * Example 1:
 * Input: app.use(gzipCompression)
 * Output: Compresses response stream with zlib.createGzip()
 * 
 * Key Requirements:
 * - Check Accept-Encoding header before compressing
 */

function gzipCompression(...args) {
  // Write your solution here
}

// Test Cases
// console.log(gzipCompression(/* test args */));

module.exports = { gzipCompression };
