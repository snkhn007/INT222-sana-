// app.use(), app.all()

// .use() - used to register another (global middleware) middlware
// it is appliaction lvl middleware
// function that runs before each and every route
// runs for all http methods, paths

// .all() - all methods but specific paths(router lvl middleware)

const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log('Global Route: ', req.url, ' ', req.method);
    next();
});

// regular expression - /^\..../ ie responsible for matching routes
app.all(/^\/admin/, (req, res, next)=>{
    console.log('This middleware is running for all /admin routes');
    next();
});

// making routes:

app.get('/', (req, res)=>{
    res.send('Welcome to Home page');
    // only use runs on console
})
app.get('/contact', (req, res)=>{
    res.send('Email: support@example.com');
    // only use runs on console
})
app.get('/admin', (req, res)=>{
    // all and use runs on console
    res.send('Admin Dash-Board');
})
app.get('/admin/user', (req, res)=>{
    // all and use runs on console
    res.send('Admin Dash-Board - User');
})

app.listen(3000, ()=>{
    console.log("Server is Running at http://localhost:3000");
    // http://localhost:3000/form
})