// for type = module in package 
// import { username } from "./src.js";
// console.log(username);

// for type = commomjs in package
const { username }= require("./src.js")
console.log(username);