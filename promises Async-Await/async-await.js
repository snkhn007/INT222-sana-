// modern way to handle promises 
// async always returns a promise
// await is always used inside async function
// it pauses the execution of function till promise is resolves
// try and catch should be used to handle errors

function fetchdata(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved");
        }, 5000);
        // reject("rejected");
    })
}

async function getData(){
    console.log("Inside async function.");
    try{
        const p = await fetchdata();
        console.log(p);
    }catch(err){
        console.log("Error:", err);
    }finally{
        console.log("Process Completed");
    }
}

getData();