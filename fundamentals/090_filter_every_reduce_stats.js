/**
 * Problem 090: Total Revenue of Valid Orders
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (filter(), every(), reduce())
 * 
 * Problem Description:
 * Write a function `getTotalValidRevenue(orders)` that filters orders where `items` array is non-empty and every item price > 0, then sums order amounts using `reduce()`.
 * 
 * Example:
 * Input: getTotalValidRevenue([{amt: 100, items: [10, 90]}, {amt: 50, items: [-5]}])
 * Output: 100
 * 
 * Key Requirements:
 * - Use `filter()` for valid order condition
 * - Use `every()` to check positive prices
 * - Use `reduce()` for sum
 */

function getTotalValidRevenue(orders) {
  // Write your solution here
}

// Test Cases
console.log(getTotalValidRevenue([{amt: 100, items: [10, 90]}, {amt: 50, items: [-5]}]));

module.exports = { getTotalValidRevenue };
