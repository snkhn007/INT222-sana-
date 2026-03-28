const fs = require('fs'); // to read before compression
const zlib = require('zlib');

const content = fs.readFileSync("dest.txt.gz")
zlib.gunzip(content, (err, decompData)=>{
    if(err){
        console.error("error: ", err);
    }
    else{
        fs.writeFileSync("destDecomp.txt", decompData);
        console.log("Decompressed data written in new file sucessfully!!");
    }
});