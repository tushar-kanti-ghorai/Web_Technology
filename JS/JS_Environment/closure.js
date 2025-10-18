let c=30;
function main(){
   let a=10;
    function m1(){
      let b=20;
      console.log(a,b,c);
    }
    
   return m1;
}

let res=main();
console.log(res);
res();

