/**
 * Problem 022: Node JWT Verifier from Scratch (Crypto)
 * Difficulty: Medium
 * Domain: Security / Node.js
 * Companies: Okta, Auth0
 * 
 * Problem Description:
 * Implement `verifyJWT(token, secret)` using Node.js `crypto` module without external JWT libraries.
 * 
 * Example 1:
 * Input: verifyJWT('header.payload.signature', 'secret')
 * Output: Decodes payload object if HMAC-SHA256 signature is valid
 * 
 * Key Requirements:
 * - Verify HMAC-SHA256 signature against header and payload
 * - Check 'exp' expiration claim
 */

function verifyJWT(...args) {
  // Write your solution here
}

// Test Cases
// console.log(verifyJWT(/* test args */));

module.exports = { verifyJWT };
