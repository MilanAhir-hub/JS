/**
 * Problem 096: Express SSE (Server-Sent Events) Handler
 * Difficulty: Medium
 * Domain: Realtime Web
 * Companies: OpenAI, Meta
 * 
 * Problem Description:
 * Create Express endpoint handler `sseHandler(req, res)` setting headers for event streams.
 * 
 * Example 1:
 * Input: app.get('/events', (req, res) => { const sse = sseHandler(req, res); sse.send({ data: 'hello' }); });
 * Output: Streams data to client with `text/event-stream` headers
 * 
 * Key Requirements:
 * - Set headers Content-Type: text/event-stream, Cache-Control: no-cache, Connection: keep-alive
 */

function sseHandler(...args) {
  // Write your solution here
}

// Test Cases
// console.log(sseHandler(/* test args */));

module.exports = { sseHandler };
