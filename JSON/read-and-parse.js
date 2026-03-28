// raed-and-parse.js - json string to js object

const fs = require('fs');
fs.readFile("data.json","utf-8", function (err, data){
    if(err){
        console.error("Error reading data.json", err);
        return;
    }
    try{
        // json string -> real js object
        const obj = JSON.parse(data);
        console.log('Parsed data', obj);

        console.log("Name: ",obj.name);
        console.log("City: ",obj.city);
    }catch(parseErr){
        console.error("Error parsing JSON: ", parseErr)
    }
})