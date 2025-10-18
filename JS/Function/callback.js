let res=cal(10,20,(a,b)=>{
   return a+b;
});


console.log(res);
function cal(a,b,sum){
    return sum(a,b);
}

console.log(res);