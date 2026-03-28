// Example pf get and post

const express = require('express');
const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended:true})); //from data

app.get('/home', (req, res)=>{
    res.send("Home Page")
});

app.post('/register', (req,res)=>{
    // name and email will be entered via postman
    const {name, email} = req.body;
    res.send(`Registered ${name} with ${email}`);
});

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
});

// curl cmd - curl -X POST 
// cmd for postman: 

// curl -X POST 
// http://localhost:3000/register \
// -H "Content-Type: application/json" \
// -d '{"name":"Sana", "email":"xyz@gmail.com"}'