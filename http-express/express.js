// framework
// 3rd party module
// Express is a small framework that helps you build a backend server easily on top of Node.j
// 1.Routing
// 2.Handling request and response
// 3.Middleware support
// 4.Can make APIs

// cmd to install express - npm install express
// npm install express -g - for global installation

// creation of server
const express = require('express');
// creating an instance of expres application
const app = express();
app.get('/',(req, res)=>{
    // write, end - http
    res.send('Welcome to Home Page');
})
app.get('/about', (req, res)=>{
    res.send("Welcome to About Page");
})

// console.log(app);

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})

// npm list express - to check if express is there or not 

// next - middleware to middleware -> router handler
// u3 -  Creating middleware