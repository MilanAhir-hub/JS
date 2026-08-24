/**
 * Problem 084: Node Custom CLI Argument Parser
 * Difficulty: Medium
 * Domain: Node.js Tools
 * Companies: Commander, Yargs
 * 
 * Problem Description:
 * Implement `parseCliArgs(argv)` converting `process.argv` like `['--port', '3000', '-v']` into `{ port: '3000', v: true }`.
 * 
 * Example 1:
 * Input: parseCliArgs(['node', 'script.js', '--name', 'Alice', '-d'])
 * Output: { name: 'Alice', d: true }
 * 
 * Key Requirements:
 * - Parse `--key value`, `--key=value`, and `-flag` syntax
 */

function parseCliArgs(...args) {
  // Write your solution here
}

// Test Cases
// console.log(parseCliArgs(/* test args */));

module.exports = { parseCliArgs };
