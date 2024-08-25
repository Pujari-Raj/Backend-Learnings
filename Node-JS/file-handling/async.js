const fs = require("fs");

// console.log("task-1");

// Blocking ,(blocking execution blocks the thread-execution and does not let others complete their task ) 
const result = fs.readFileSync("contacts.txt", "utf-8");

// console.log(result);

// console.log("task-2");

//
console.log("async-task-1");

// Non-Blocking ,(non-blocking execution doesn't block the thread-execution let others complete their task ) 
fs.readFile("contacts.txt", "utf-8", (err, result) => {
    console.log(result);
});

// console.log(result);

console.log("async-task-2");