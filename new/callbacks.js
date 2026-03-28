// used to make js code async
// it allows us to write a non blocking code
// functions that are passed as arg of other functions
// increases efficiency 

// disadvantage:
// callback hell:
// nested callback me pyramid of doom bn jaata h 
// code becomes confusing 
// can be removed by using promices , async await.

// Sync Code:

// const fs = require('fs');
// // task 01
// console.log("start");
// // task 02
// const data = fs.readFileSync("dummy.txt");
// console.log(data.toString());
// // task 03
// console.log("end");


// // Async Code( using callback ):

// const fs = require('fs');
// // task 01
// console.log("start");
// // task 02
// fs.readFile("dummy.txt", function(error, data){
//     if( error ) return console.error(error);
//     else console.log(data.toString());
// });
// // task 03
// console.log("end");



const fs = require('fs');
fs.readFile("dummy.txt", function(error, data){
    if( error ) return console.error(error);
    else console.log(data.toString());
});

console.log("start");

fs.readFile("dummy.txt", function(error, data){
    if( error ) return console.error(error);
    else console.log(data.toString());
});

console.log("end");
