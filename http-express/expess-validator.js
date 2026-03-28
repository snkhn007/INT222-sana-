// third party middleware - //npm install express-validator
// validation , authetication/sanitizing

const express = require('express');
// validationResult = collects validation errors
// body - validate form feild
const {body , validationResult} = require('express-validator');
const app = express();
// Built-in middleware urlencoded is used to validate data
// third-party middle-ware me body-parser.urlencoded is used to parse form data

app.use(express.urlencoded({extended:false}));

// making form
app.get('/form', (req, res)=>{
    res.send(`<form method="POST" action="/register">
        <input type="email" name = "email" placeholder = "enter your email" required/>
        <input type="password" name = "password" placeholder = "enter your password" required/>
        <button type="submit">Register</button>
        </form>`);
});



app.post('/register', [body('email').isEmail().withMessage('Invalid Email Format'),
    body('password').isLength({min:5}).withMessage('Password must be 5 character long'),
], (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        //ie if errors are there
        return res.send(`<h1>Errors: ${JSON.stringify(errors.array())}</h1>`);
    }else{
        res.send(`<h1>Registration Successful</h1>`);
    }
});

app.listen(3000, ()=>{
    console.log("Server is Running at http://localhost:3000");
    // http://localhost:3000/form
})
