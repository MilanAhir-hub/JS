/**
 * Problem 044: Express Subdomain Router Middleware
 * Difficulty: Medium
 * Domain: Express.js
 * Companies: Vercel, Cloudflare
 * 
 * Problem Description:
 * Create Express middleware `subdomainRouter(subdomain, router)` that routes requests matching specific subdomains.
 * 
 * Example 1:
 * Input: app.use(subdomainRouter('api', apiRouter))
 * Output: Routes 'api.example.com' to apiRouter
 * 
 * Key Requirements:
 * - Extract subdomain from req.headers.host
 */

function subdomainRouter(...args) {
  // Write your solution here
}

// Test Cases
// console.log(subdomainRouter(/* test args */));

module.exports = { subdomainRouter };
