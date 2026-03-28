// core module
// to create web server
// to handle http req and response
// http req - hadnled via http methods
// http methods- get, put, post, delete
// http res - json, html files.....

// importing
const http = require('http');
const server = http.createServer((req, res)=>{
    // send a res header - contains additional info, sets status codde as well
    // status code - ex 404 page not found, ex 500 for internal crashing, ex 200 ok status or sucessfully
    res.writeHead(200, {"content-type":'text/plain'});

    // sendinng res body
    // content to be seen on server
    res.end("Hello world, this is my server body");
});
// listen the server at a specific port number
server.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000"); // on local host
})