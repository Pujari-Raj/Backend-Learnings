function add(a, b) {
   return a+b;
}

function sub(a, b) {
    return a-b;
}

// console.log(add(10, 20)); // it will work

/**
 * let's say if we want to export this function so that we can access it 
 * oustide(Math.js) file , so for that we have to export this function
 * to export function in js we have to use :
 * module.exports = funtionName 
 */

// the below module.export will work for exporting only 1 function, but what if we want to export "n" number of functions.  
module.exports = add;

// for exporting "n" number of functions, we have to pass all functions in a single object

module.exports = { add, sub}