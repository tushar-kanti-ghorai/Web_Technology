let arr=[10,20,30,40,20,50];
let index=arr.indexOf(20,-1);
console.log(index);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log(fruits.indexOf("Apple"));      // Output: 2 (first occurrence)
console.log(fruits.indexOf("Apple", 3));   // Output: 4 (search from index 3)
console.log(fruits.indexOf("Grape"));      // Output: -1 (not found)
console.log(fruits.indexOf("Apple",-4));
console.log(fruits.indexOf("Apple",-2));