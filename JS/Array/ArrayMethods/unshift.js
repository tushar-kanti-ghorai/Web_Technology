const arr=[1,2,3,4];
let arr2=[];
arr2.unshift(...arr);
console.log(arr2);
arr2.unshift(arr);
console.log(arr2);