/**
 * Problem 070: Filter Items Matching Any Tag
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter(), some())
 * 
 * Problem Description:
 * Write a function `filterByTags(items, targetTags)` that keeps items whose `tags` array contains at least one of `targetTags` using `filter()` and `some()`.
 * 
 * Example:
 * Input: filterByTags([{tags: ["js", "html"]}, {tags: ["css"]}], ["js"])
 * Output: [{tags: ["js", "html"]}]
 * 
 * Key Requirements:
 * - Use `filter()` on items
 * - Use `some()` with `includes()` on tags
 */

function filterByTags(items, targetTags) {
  // Write your solution here
}

// Test Cases
console.log(filterByTags([{tags: ["js", "html"]}, {tags: ["css"]}], ["js"]));

module.exports = { filterByTags };
