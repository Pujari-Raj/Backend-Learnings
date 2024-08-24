// The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require("fs");

// This command is used to create file (test2.txt) in synchronus manner
fs.writeFileSync("./test2.txt", "Hello from Test");

//  This command is used to create file (asynctest.txt) in asynchronus manner, it doesn't return anything
const getvalue = fs.writeFile(
  "./asynctest.txt",
  "Hello from Async-Test",
  (err) => {}
);

// console.log(getvalue); //undefined

//  This command is used to read a file (test.txt) in synchronus manner, it  return data from file
try {
  const getresult = fs.readFileSync("./test.txt", "utf-8");
  if (getresult.trim() === "") {
    console.log("The file is empty.");
  } else {
    // console.log(getresult);
  }
//   console.log(getresult);
} catch (err) {
  console.error(err);
}


// This command is used to read a file (asynctest.txt) in asynchronus manner,it  return data  from file
fs.readFile("./asynctest.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(result);
  }
});
// console.log(getresults);

//This command is used to add content in a file (test.txt) in synchronus manner, it  return data from file

fs.appendFileSync("./test.txt", `Hey there\n`);