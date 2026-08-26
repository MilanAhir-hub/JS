/**
 * Problem 045: Format Currency Amounts
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (map())
 * 
 * Problem Description:
 * Write a function `formatPrices(amounts, currencySymbol = "$")` that maps numbers to formatted price strings like `"$10.00"`.
 * 
 * Example:
 * Input: formatPrices([5, 12.5], "$")
 * Output: ["$5.00", "$12.50"]
 * 
 * Key Requirements:
 * - Use `map()` and `.toFixed(2)`
 */

function formatPrices(amounts, currencySymbol = "$") {
  let result = amounts.map(amount => `${currencySymbol}${amount.toFixed(2)}`);

  return result;
}

// Test Cases
console.log(formatPrices([5, 12.5], "$")); // Expected output: ["$5.00", "$12.50"]

module.exports = { formatPrices };
