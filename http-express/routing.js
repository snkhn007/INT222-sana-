const http = require('http');
const server = http.createServer((req, res)=>{
    res.setHeader("content-type",'text/html');
    //  / - home page route
    // method get when getting data from server
    if(req.url === '/' &&  req.method === 'GET'){
        // res.statusCode = 200;
        // can also be set by writeHead
        res.writeHead(200);
        
        // writing end() or write()
        res.write('<h1>Welcome to home page </h1>');
        res.end('<p>Thanks for coming HOME page</p>');
    }
    
    else if(req.url === '/about' && req.method === 'GET'){
        res.writeHead(200);
        res.write('<h1>Welcome to About page </h1>');
        res.end('<p>Thanks for coming to ABOUT page</p>');
    }
    
    else if(req.url === '/contact' && req.method === 'GET'){
        res.writeHead(200);
        res.write('<h1>Welcome to CONTACT page </h1>');
        res.write('<p>Thanks for coming to CONTACT page</p>');
        res.end('<p>Email: suport@emaple.com</p>');
    }
    
    else{
        res.writeHead(404);
        res.end('<h1>Page Does Not Exist.</h1>');
    }
});
server.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})