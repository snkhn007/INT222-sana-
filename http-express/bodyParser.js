// we are able to read and parse body or incoming http req
// especially post, put, del, not get

// node can only read binary streams, body parser acts as a translator between
// http -> java sc object

// body- parser - npm install body-parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// {extended:false} - cannot use nested data
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send(`<form method="POST" action="/submit">
        <input type="text" name = "username" placeholder = "enter Your Name" required/>
        <button type="submit">Submit</button>
        </form>`)
});
// post req me parcing hogi on /submit route

app.post('/submit', (req, res)=>{
    // data abstraction
    // username abstraction:
    const {username} = req.body;
    res.send(`<h1>Welcome, ${username}!!!</h1>`);
});

app.listen(1000, ()=>{
    console.log("server is running at http://localhost:1000")
})
