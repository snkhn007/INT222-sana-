// third party middleware
// allows to maintain a session like bahavior
// client side session
const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({name:'session', keys: ['sec_key'], maxAge:5000}));
app.get('/', (req, res)=>{
    if(!req.session.views){
        // ie if no session views
        req.session.views = 1;
    }
    else{
        req.session.views++;
    }
    res.send(`Number of views: ${req.session.views}`)
});

app.listen(3000, ()=>{
    console.log("Server is Running at http://localhost:3000");
    // http://localhost:3000/
})