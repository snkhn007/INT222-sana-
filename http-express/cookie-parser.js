// cookie - small data stored inside user browser by website
// used to track activity of user
// expiry of the cookie = maxAge , in ms
// name : val
// has http only status ie true/false

// cookie-parser - third party middleware ie install + req
// reads cookie from incoming req headers- req.headers.cookie
// parsing of that data to easy to use data??
// cookie as a string in head -> cookie-parser -> js object 
// types:
// 1.signed - has a key, which is needed to access it 2. unsigned

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('abc')); // secret key for signed cookie

app.get('/setcookie', (req, res)=>{
    // httpOnly - js can not access it
    res.cookie('theme', 'dark', {maxAge : 90000, httpOnly :true}); // unsigned cookkie
    res.cookie('sid', 'abce123', {maxAge : 90000, httpOnly :true, signed:true}) // signed cookie
    // above code only sets the cookies in backend

    res.send('cookies are set');
});
app.get('/read', (req, res)=>{
    console.log(req.cookies); //unsigned data on console
    console.log(req.signedCookies); //unsigned data on console

    res.json({cookies: req.cookies, signed : req.signedCookies});
});

app.listen(3000, ()=>{
    console.log("Server is Running at http://localhost:3000");
    // http://localhost:3000/setcookie
    // http://localhost:3000/read
})
