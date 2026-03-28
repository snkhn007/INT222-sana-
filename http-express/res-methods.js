
// res.end() ends the req, writes on server 
// res.write() writes on server , route can be defined
// res.writehead() can set status code as well
// res.StatusCode() to directly, individually set the status
// res.setHeader() ---------- "" ------------------

const http = require('http');
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("content-type",'text/html');

    res.write("<h1>Welcome</h1>");
    res.write("<p>example of res-methods</p>");


    // res.writeHead(200, {"content-type":'text/plain'});
    // res.end("Hello world, this is my server body");

    // we require the end (R) it ends req 
    res.end();
});
server.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})