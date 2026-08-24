/**
 * Problem 097: WebSocket Auto Reconnect Client
 * Difficulty: Medium
 * Domain: Realtime Web
 * Companies: Figma, Slack
 * 
 * Problem Description:
 * Create `ReconnectingWebSocket(url, options)` class that automatically reconnects with exponential backoff on disconnect.
 * 
 * Example 1:
 * Input: const ws = new ReconnectingWebSocket('wss://api.com'); ws.send('hi');
 * Output: Auto-reconnects when connection drops
 * 
 * Key Requirements:
 * - Handle onerror and onclose events with reconnection timer
 */

function ReconnectingWebSocket(...args) {
  // Write your solution here
}

// Test Cases
// console.log(ReconnectingWebSocket(/* test args */));

module.exports = { ReconnectingWebSocket };
