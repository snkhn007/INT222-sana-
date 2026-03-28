// next - middleware to middleware -> router handler
// middleware are the functions that run between receiving of a req and response
// router handler?

// TYPES: 
// 1. Application lvl - run for all routes / specific routes(route ke routes?)
// ex app.use (to use any other middleware), app.method() ( method - post, get..)

// 2. Router lvl - for only specific routes
// ex express.router

// 3.Built-in - ex express.json (used to pass json data), expess.urlrncoded (used to pass form data), 
// express.static (directory and path?)

// 4.Third-party - installation is needed, requirement is needed
// ex morgan(login), cors(cross origin resource sharing, connects backend-frontend), body-parser(to parse form data?), express-session(server side session managemenet), cookie....

// 5.Error-Handling - app.use(err, req, res, next)..

const express = require('express');
const app = express();
app.get('/',(req, res)=>{
    res.send('Welcome to Home Page');
})
app.get('/about', (req, res)=>{
    res.send("Welcome to About Page");
})

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})
