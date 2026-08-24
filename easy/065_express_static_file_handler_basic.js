/**
 * Problem 065: Express Static File Handler Basic
 * Difficulty: Easy
 * Domain: Express.js
 * Companies: Node.js, Vercel
 * 
 * Problem Description:
 * Create Express middleware `serveStatic(rootPath)` that serves static files from a directory.
 * 
 * Example 1:
 * Input: app.use(serveStatic('./public'))
 * Output: Serves matching file if exists
 * 
 * Key Requirements:
 * - Check file existence with fs.existsSync
 */

function serveStatic(...args) {
  // Write your solution here
}

// Test Cases
// console.log(serveStatic(/* test args */));

module.exports = { serveStatic };
