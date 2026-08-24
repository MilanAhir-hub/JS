/**
 * Problem 085: Node ENV Validation Schema
 * Difficulty: Medium
 * Domain: Node.js Config
 * Companies: Zod, Envalid
 * 
 * Problem Description:
 * Implement `validateEnv(envObj, schema)` asserting required environment variables and types.
 * 
 * Example 1:
 * Input: validateEnv(process.env, { PORT: 'number', NODE_ENV: 'string' })
 * Output: Returns parsed env object or throws error if PORT missing
 * 
 * Key Requirements:
 * - Coerce types like strings to numbers/booleans where required
 */

function validateEnv(...args) {
  // Write your solution here
}

// Test Cases
// console.log(validateEnv(/* test args */));

module.exports = { validateEnv };
