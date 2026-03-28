const fs = require('fs'); // to read before compression
const zlib = require('zlib');

const content = fs.readFileSync("sample.txt", 'utf8')
zlib.gzip(content, (err, compData)=>{
    if(err){
        console.error("error: ", err);
    }
    else{
        fs.writeFileSync("dest.txt.gz", compData);
        console.log("Comptressed data written in new file sucessfully!!");
    }
});