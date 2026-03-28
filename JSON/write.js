// write.js - convert js obj to json string
const fs = require('fs'); // we will use fs ke function
const data = {
    name: "saniya",
    city: "delhi"
};
const jsonStr = JSON.stringify(data, null, 2) // null, 2 use to provide a pretty formate, 2 indentation 

// rewrite in json.data file
// if empty -> writing the data
// if not empty -> overwriting the data
fs.writeFile("data.json", jsonStr, function(err){
    if(err){
        console.error("Error Writing data in data.json", err);
        return;
    }else{
        console.log("Data Written Successfully!! ");
    }
})