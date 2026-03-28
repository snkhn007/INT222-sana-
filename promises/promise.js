// represent th evalue which is available now, later or never
// handles async tasks
// pendling - operation si still running, later 
// fullfilled - completed, res can be seen, now
// rejected - internal crashing or error, never

const mypromise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Operation Done!!")
    }
    reject("Operation Not Done!!!");
})
mypromise.then((val)=>{
    console.log(val)
}).catch((val)=>{
    console.log(val)
}).finally(()=>{
    console.log("Final block"); 
})