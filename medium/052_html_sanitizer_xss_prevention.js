/**
 * Problem 052: HTML Sanitizer (XSS Prevention)
 * Difficulty: Medium
 * Domain: Web Security
 * Companies: Google, OWASP
 * 
 * Problem Description:
 * Create `sanitizeHTML(dirtyHTML, allowedTags)` that strips dangerous HTML tags `<script>`, `onload`, `javascript:` links.
 * 
 * Example 1:
 * Input: sanitizeHTML('<p>Hi <script>alert(1)</script></p>', ['p'])
 * Output: '<p>Hi </p>'
 * 
 * Key Requirements:
 * - Strip non-allowed tags and inline event attributes like onclick
 */

function sanitizeHTML(...args) {
  // Write your solution here
}

// Test Cases
// console.log(sanitizeHTML(/* test args */));

module.exports = { sanitizeHTML };
