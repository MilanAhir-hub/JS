/**
 * Problem 077: Filter In-Stock Products and Sort by Price
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter(), sort())
 * 
 * Problem Description:
 * Write a function `getAvailableProductsSorted(products)` that filters products with `inStock: true` and sorts them by price low to high.
 * 
 * Example:
 * Input: getAvailableProductsSorted([{price: 20, inStock: true}, {price: 10, inStock: true}, {price: 5, inStock: false}])
 * Output: [{price: 10, inStock: true}, {price: 20, inStock: true}]
 * 
 * Key Requirements:
 * - Use `filter()` for `inStock`
 * - Use `sort()` by price
 */

function getAvailableProductsSorted(products) {
  // Write your solution here
}

// Test Cases
console.log(getAvailableProductsSorted([{price: 20, inStock: true}, {price: 10, inStock: true}, {price: 5, inStock: false}]));

module.exports = { getAvailableProductsSorted };
