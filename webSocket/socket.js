// server side event -> connection , close, message ->server side events
// onmessage, onclose, onopen, onerror -> client side events
// ws is event based communication 
// installation is required

const WebSocket = require('ws');
const wss = new WebSocket.Server({port:8080});

console.log("websocket is running at: ws://localhost:8080");

// socket -> represents a connected client
// new client connection handling ->
wss.on('connection', (socket)=>{
    console.log('New client connection');

    // we will not see output on server unlike res.send()
    // 

    // sending messages to client ->
    socket.send("Welcome, you are connected to webSocket server!");
    // event for receiving data from user using 'message' event->
    // server receving from client ie socket
    socket.on('message', (msg)=>{
        console.log('received from client ', msg.toString());

        // echo back ->
        socket.send('Server Echo:' + msg);
    });

    // Detect client disconnection using 'close'
    socket.on('close', ()=>{
        console.log('CLient Disconnected');
    })
})



// ws://localhost:8080
// it is a communication channel, not a webpage
// isliye it wont run on browser
// we will use extension to open ws