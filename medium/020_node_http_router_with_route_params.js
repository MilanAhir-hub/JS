/**
 * Problem 020: Node HTTP Router with Route Params
 * Difficulty: Medium
 * Domain: Node.js Frameworks
 * Companies: Express, Fastify
 * 
 * Problem Description:
 * Implement `Router` class matching URLs like `/users/:id/posts/:postId` and populating `req.params`.
 * 
 * Example 1:
 * Input: router.get('/users/:id', (req, res) => console.log(req.params.id)); router.handle(req, res);
 * Output: Extracts params `{ id: '123' }` from URL '/users/123'
 * 
 * Key Requirements:
 * - Convert route strings to regex patterns
 * - Extract named parameters into req.params object
 */

function Router(...args) {
  // Write your solution here
}

// Test Cases
// console.log(Router(/* test args */));

module.exports = { Router };
