
const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream("comstream.txt.gz");


const gunzip = zlib.createGunzip();
const output = fs.createWriteStream("newStream.txt");

input.pipe(gunzip).pipe(output);