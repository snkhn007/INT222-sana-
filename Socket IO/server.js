// npm install express socket.io
const express = require('express');
const path = require('path');

// socket.io require doc http server to acctach websocket functionality
// using express to server static html files
const http =require('http');

// imporitng a server class with socket.io
// to create realtime webseocket server
const {Server} = require('socket.io');
const app = express();

const server = http.createServer(app);


// Socket.io <-> http server 
// io will handle all realtime websocket communivation
const io = new Server(server);

// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/public')));
// explicit route defining ->
app.get('/', (req, res)=>{
    // res.sendFile(__dirname + '/public/client.html');
    res.sendFile(path.join(__dirname, 'public', 'client.html'));
})

// handling client connection  ->
io.on('connection', (socket)=>{
    console.log('User Connected ', socket.id);

    socket.on('chatMessage', (msg)=>{
        console.log('Message is: ', msg);
        // broadcasting ->
        io.emit('chatMessage', {
            user:socket.id,
            text:msg
        });
    })
    socket.on('disconnect', ()=>{
        console.log('User Disconnected ', socket.id)
    })
});


server.listen(3000, ()=>{
    console.log('Started...')
})