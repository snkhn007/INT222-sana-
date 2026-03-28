const fs = require('fs');
// task 01
console.log("start");
// task 02
fs.readFile("dummy.txt", function(error, data){
    if( error ) return console.error(error);
    else console.log(data.toString());
});
// task 03
console.log("end");

