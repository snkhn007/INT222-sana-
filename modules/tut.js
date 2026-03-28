console.log(20+20);
console.log("learning node js ");
function fruit(item){
    console.log("The name is " + item);
}
fruit("apple")

function op(a, b){
    console.log(a+b);
    console.log(a-b);
    console.log(a/b);
    console.log(a*b);
}

op(10, 20);

var a = 1;
let b = 2;
const c = 3;

console.log(a)
console.log(b)
console.log(c)

a = 10;
b = 20;
// c=30;
console.log(a)
console.log(b)
console.log(c)
var fs = require('fs');
fs.writeFileSync("Example.txt","this is a file");

let size = 10;
if(size > 10){
    console.log("More than 10");
}
let use =["amit", "ankit"];
for(let i = 0; i<use.length; i++){
    console.log(use[i]);
}

// export import 

