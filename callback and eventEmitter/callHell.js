// disadvantage:
// callback hell:
// nested callback me pyramid of doom bn jaata h 
// code becomes confusing 
// can be removed by using promices , async await.


// const fs = require('fs');
// const file = "dummy.txt";

// // check if file exists or not 
// fs.exists(file, function(exist){
//     if(exist){
//         // to get metadata, ie information, discription
//         fs.stat(file, function(err, stat){
//             if(err) {throw err;}
//             if(stat.isFile()){
//                 // utf-8 is a encoding scheme, no need to use toString()
//                 fs.readFile(file, "utf-8" ,function(error, data){
//                     if( error ) return console.error(error);
//                     else console.log(data.toString());                    
//                 })
//             }
//         }) 
//     }
// });


// Solving callback Hell using Generalized way
const fs = require('fs');
const file = "dummy.txt";

function ReadFile(err, data){
    if(err) throw err;
    console.log(data);
}

function status(err, stat){
    if(err) throw err;
    if(stat.isFile()){
        fs.readFile(file, "utf-8", ReadFile);
    }
}

function fileExists(exist){
    if(exist) fs.stat(file, status);
}

fs.exists(file, fileExists);


