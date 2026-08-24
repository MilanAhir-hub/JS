/**
 * Problem 098: Rank Players by Total Score
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (reduce(), sort(), map())
 * 
 * Problem Description:
 * Write a function `rankPlayers(scores)` where `scores` is `[{player: "A", score: 10}, {player: "A", score: 20}, {player: "B", score: 40}]`. Sum total scores per player, sort descending, and return `[{player, totalScore, rank}]`.
 * 
 * Example:
 * Input: rankPlayers([{player: "A", score: 10}, {player: "A", score: 20}, {player: "B", score: 40}])
 * Output: [{player: "B", totalScore: 40, rank: 1}, {player: "A", totalScore: 30, rank: 2}]
 * 
 * Key Requirements:
 * - Aggregate scores with `reduce()`
 * - Sort array descending
 * - Assign 1-based ranks with `map()`
 */

function rankPlayers(scores) {
  // Write your solution here
}

// Test Cases
console.log(rankPlayers([{player: "A", score: 10}, {player: "A", score: 20}, {player: "B", score: 40}]));

module.exports = { rankPlayers };
