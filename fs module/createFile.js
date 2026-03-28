// write file async
const f = require('fs');
// f.writeFile("asynFile.txt", "this is the async file", function(){
//     console.log("Done");
// });

// // read file sync 
// let data = f.readFileSync("module.txt", "utf-8");
// console.log(data);
// // console.log(data.toString());


// // read file async
// f.readFile("module.txt", function(err, data){
//     // null is the base value of error
//     if(err){
//         console.error(err);
//     }else{
//         console.log(data.toString());
//     }
// })

// more functions of fs - stat, exist
// append file in fs

// f.appendFile("module.txt", "new appended data", (err, data)=>{
//     console.error(data); //undefined
// })
f.appendFile("module.txt", " New appended data! ", (err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Data Appended");
    }
})

