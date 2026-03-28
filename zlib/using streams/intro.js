// streams
// 1. readable stream
// 2,3,4 using znlib

const fs = require('fs');
const readStream = fs.createReadStream("dummy.txt", "utf8");
// event handling
// data event will trigger if a chuck of event gets ready
readStream.on('data', (chunk)=>{
    console.log("Received a chunk:", chunk);
})
// end event will trigger when file is read fully
readStream.on('end', ()=>{
    console.log("Finished Reading File !!");
})
// 
readStream.on('error', (err)=>{
    console.log("Eroor: ", err);
})

// how to create a file using a cmd
// echo "this is new file created by echo cmd"> newFile.txt
// how to create a file
// writefile, writefilesync