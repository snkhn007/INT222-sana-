// handling the events in backend, it is a class provide by node js
// containes a event queue
// login -> query in database -> task 1 -> event queue 
// event is part of core module?
// const event = require('events'); //or

// const event = require('node:events');
// // here event becomes a class

// // instance of class:
// const e = new event();

// // task:
// // on creates or defines a task
// // ()=>{}it is a callback
// e.on('task1', ()=>{
    //     console.log('task 01');
// })
// e.on('task2', ()=>{
//     console.log('task 02');
// })
// e.on('task3', ()=>{
//     console.log('task 03');
// })

// // emitting a task:
// e.emit('task1');
// setTimeout(function(){
//     e.emit('task2');
// }, 2000);
// e.emit('task3');



// // passing vals:
// const event = require('node:events');
// const e = new event();
// e.on('task1', (t1)=>{
//     console.log('task 01 ', t1);
// })
// e.on('task2', (t2)=>{
//     console.log('task 02 ', t2);
// })

// // emitting a task:
// e.emit('task1', 345);

// let int = 2000;

setInterval((e)=>{
    e.emit('task2', int);
    int +=2000;
}, 2000);
// // cntrl + C

// callback makes js a async language
// it allows us to write a non blocking code

