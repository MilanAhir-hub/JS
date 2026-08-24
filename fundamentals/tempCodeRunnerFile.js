function addHistory(history, action, limit) {
  history.push(action);

  if(history.length>limit){
    history.shift();
  }

  return history;
}

// Test Cases
console.log(addHistory(["a", "b", "c", "d"], "e", 3)); // Expected output: ["b", "c", "d"]

module.exports = { addHistory };
