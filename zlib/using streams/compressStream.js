// readable writable duplex 
// transform(there to modify the content while you are streaming)
const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream("sample.txt", "utf8");

// compressing file using transform
const gzip = zlib.createGzip();
const output = fs.createWriteStream("comStream.txt.gz");
// providing pipeling
// giving data direction, giving streams connection
// input->compress->destination file
input.pipe(gzip).pipe(output);