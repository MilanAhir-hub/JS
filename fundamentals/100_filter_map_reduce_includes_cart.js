/**
 * Problem 100: Comprehensive Shopping Cart Summary
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter(), map(), reduce(), includes())
 * 
 * Problem Description:
 * Write a function `summarizeCart(cart, discountCategories, discountPercent)` that applies `discountPercent` to items whose `category` is in `discountCategories`, sums total cost, and returns `{ total, discountedItemsCount }`.
 * 
 * Example:
 * Input: summarizeCart([{price: 100, category: "tech"}, {price: 50, category: "food"}], ["tech"], 0.2)
 * Output: { total: 130, discountedItemsCount: 1 }
 * 
 * Key Requirements:
 * - Use `includes()` to check category eligibility
 * - Use `map()` or `reduce()` to apply discount & total
 * - Return summary object
 */

function summarizeCart(cart, discountCategories, discountPercent) {
  // Write your solution here
}

// Test Cases
console.log(summarizeCart([{price: 100, category: "tech"}, {price: 50, category: "food"}], ["tech"], 0.2));

module.exports = { summarizeCart };
