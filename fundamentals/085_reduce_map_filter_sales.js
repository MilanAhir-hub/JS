/**
 * Problem 085: Extract Categories with Total Sales Over Threshold
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce(), filter(), map())
 * 
 * Problem Description:
 * Write a function `getTopCategories(transactions, minTotal)` that totals sales per category using `reduce()`, filters categories >= minTotal, and returns category names.
 * 
 * Example:
 * Input: getTopCategories([{cat: "tech", amt: 100}, {cat: "tech", amt: 50}, {cat: "food", amt: 20}], 100)
 * Output: ["tech"]
 * 
 * Key Requirements:
 * - Use `reduce()` for category sums
 * - Filter keys by threshold
 */

function getTopCategories(transactions, minTotal) {
  // Write your solution here
}

// Test Cases
console.log(getTopCategories([{cat: "tech", amt: 100}, {cat: "tech", amt: 50}, {cat: "food", amt: 20}], 100));

module.exports = { getTopCategories };
