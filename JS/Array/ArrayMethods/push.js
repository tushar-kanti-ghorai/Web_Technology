const arr=[1,2,3];
const arr1=[];
arr1.push(...arr);
console.log(arr1);
const arr2=[];
arr2.push(arr1);
console.log(arr2);
console.log(arr2.length);
arr1[0]=3;
console.log(arr2);

