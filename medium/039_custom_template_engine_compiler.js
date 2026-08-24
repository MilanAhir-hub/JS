/**
 * Problem 039: Custom Template Engine Compiler
 * Difficulty: Medium
 * Domain: JS Compiler
 * Companies: EJS, Handlebars, Meta
 * 
 * Problem Description:
 * Implement `compileTemplate(templateStr)` converting string like `Hello {{ name }}!` into template function.
 * 
 * Example 1:
 * Input: const render = compileTemplate('Hi {{ user.name }}'); render({ user: { name: 'Alice' } })
 * Output: 'Hi Alice'
 * 
 * Key Requirements:
 * - Replace double mustache tags `{{ path }}` with evaluated object values
 */

function compileTemplate(...args) {
  // Write your solution here
}

// Test Cases
// console.log(compileTemplate(/* test args */));

module.exports = { compileTemplate };
