console.log("start");
let id=setInterval(()=>{
    console.log("h1");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000)
console.log("end");