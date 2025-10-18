function sum(){
    let sum=0;
    console.log("length=",arguments.length);
    for(let i=0;i<arguments.length;i++){
      sum+=arguments[i];
}
console.log(sum);
}


sum();
sum(1,2);
sum(1,2,3,4);

//not working
let add=()=>{
 let sum=0;
    console.log("length=",arguments.length);
    for(let i=0;i<arguments.length;i++){
      sum+=arguments[i];
}


};

add();
add(1,2);
add(1,2,3);
