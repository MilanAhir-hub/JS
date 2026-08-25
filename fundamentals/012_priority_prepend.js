/**
 * Problem 012: Add Urgent Task to Front
 * Difficulty: Fundamentals
 * Domain: JS Array Methods (unshift(), pop())
 * 
 * Problem Description:
 * Write a function `addUrgentTask(tasks, task, maxCapacity)` that adds `task` to the start of `tasks`. If capacity is exceeded, drop last task with `pop()`.
 * 
 * Example:
 * Input: addUrgentTask(["task1", "task2"], "urgent", 2)
 * Output: ["urgent", "task1"]
 * 
 * Key Requirements:
 * - Use `unshift()` to add task
 * - Use `pop()` if total elements exceed maxCapacity
 */

function addUrgentTask(tasks, task, maxCapacity) {
  
  while(tasks.length >=maxCapacity){
      tasks.pop();
  }

  tasks.unshift(task);

  

  return tasks;
}

// Test Cases
console.log(addUrgentTask(["task1", "task2"], "urgent", 2)); // Expected output: ["urgent", "task1"]

module.exports = { addUrgentTask };
