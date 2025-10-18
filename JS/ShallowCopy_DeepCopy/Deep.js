let num1=[10,20,30];
let num2=[...num1];
num2[2]=40;
console.log(num1);
console.log(num2);


let obj1={
    id:101,
    ename:"Kiran"
}

let obj2={
    ...obj1,
}

obj2.id=103;

console.log(obj1);
console.log(obj2);