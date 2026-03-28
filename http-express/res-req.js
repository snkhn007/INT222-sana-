// req - data that client sends to a server 
// req.url - to get url of the path requested
// req.method - to get which req method is being used
// req.headers - to get the information (key-value pair, .... )

// event wale method:
// req.on('data') - sgdfgsdtyfd
// req.on('end') - sgdfgsdtyfd


const http = require('http');
const server = http.createServer((req, res)=>{
    console.log("URL: ", req.url);
    console.log("METHOD: ", req.method);
    console.log("HEADERS: ", req.headers);
    res.writeHead(200, {"content-type":'text/plain'});
    res.end("Hello world, this is my server body");
});
server.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})
// URL:  /
// METHOD:  GET
