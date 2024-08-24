/**
 * As we use import/#include keywrord in C++, java language to import any
 * module/ package , In js we use require
 */

const Math = require("./math");
// we can also destructure functions (add, sub) and use it
const {add, sub} = require("./math") 

// console.log("Bina Hello world kaise start karoge");

// console.log(add(10, 20)); // if we directly try to access this it throw error (add is not defined)

// we can also directly export the function
exports.multiply = (num1, num2) => num1 + num2;

exports.div = (num1, num2) => num1 / num2;
 
console.log("Value of Math-",Math);// it will give us the blank {} "object"

console.log("Value of add-",Math.add(10, 70));
console.log("Value sub-",Math.sub(100, 70));
