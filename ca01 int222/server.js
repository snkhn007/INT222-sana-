const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/login', (req, res)=>{
    res.send(`<form action="/feedback" method="POST">
        <input type="text" name="name" id="name" placeholder="Your Name"><br>
        <textarea name="feedback" id="feedback" placeholder="Message"></textarea><br>
        <button type="submit">Send</button>
    </form>`);
});

app.post('/feedback', (req, res)=>{
    const name = req.body.name;
    const feedback = req.body.feedback;

    res.send(`<h1>Thank you ${name}</h1><br><p>Your message: ${feedback}</p>`);
});

app.listen(4002, ()=>{
    console.log('Started listening ......');
});

// POSTMAN COMMAND->
// curl -X POST http://localhost:4002/feedback -d "name=sana sadaf khan&feedback=hello world"