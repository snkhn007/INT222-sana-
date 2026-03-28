// res.writehead() can set status code as well
// res.StatusCode() to directly, individually set the status
// res.setHeader() --

// header - contaains additional info in key val pair, sent by server, how to handle a data, caching and authorization 
// status code - tells status of req
// 200 ok
// 201 resource created
// 400 bad, invalid req
// 404 page not found
// 500 internal crashing
// 401 unathorized

// example of setting res header and status code
const http = require('http');
const server = http.createServer((req, res)=>{
    // res.setHeader('text-content', 'text/html');
    if(req.url === '/' && req.method === 'GET'){
        res.setHeader('text-content', 'text/html');
        res.statusCode = 200;
        res.write('<h1>Welcome to homepage!!</h1>')
        res.end('<p>this is para tag in home page.</p>')
    }
    
    else if(req.url === '/about' && req.method === 'GET'){
        res.writeHead(200, {"content-type":'text/html'});
        res.write('<h1>Welcome to About!!</h1>')
        res.end('<p>this is para tag in about page.</p>')
    }
    
    else if(req.url === '/contact' && req.method === 'GET'){
        req.setHeader = 200;
        res.setHeader('text-content', 'text/html');
        const data = {
            message : "Here is your data",
            success : true
        };
        // js obj -> json
        res.end(JSON.stringify(data));
    }
    
    else if(req.url === '/unauthorized'){
        // no need for method during unauthorized 
        res.writeHead(401, {"content-type":'text/plain'});
        res.end("Unauthorized Condition");        
    }
    
    else{
        res.writeHead(404, {"content-type":'text/plain'});
        res.end("Page not found");        

    }
})
server.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})