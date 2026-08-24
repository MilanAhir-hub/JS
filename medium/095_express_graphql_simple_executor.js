/**
 * Problem 095: Express GraphQL Simple Executor
 * Difficulty: Medium
 * Domain: Express.js / API
 * Companies: Meta, Apollo
 * 
 * Problem Description:
 * Create Express middleware `graphqlMiddleware(schema, resolvers)` executing GraphQL queries against resolvers.
 * 
 * Example 1:
 * Input: app.use('/graphql', graphqlMiddleware(schema, resolvers))
 * Output: Parses POST body { query: '{ user { name } }' } and returns JSON
 * 
 * Key Requirements:
 * - Parse basic GraphQL query string and execute matching resolver
 */

function graphqlMiddleware(...args) {
  // Write your solution here
}

// Test Cases
// console.log(graphqlMiddleware(/* test args */));

module.exports = { graphqlMiddleware };
