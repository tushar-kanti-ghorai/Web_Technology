const myMap = new Map([["name", "Alice"], ["age", 25]]);
for (let [key, value] of myMap) {
  console.log(key, value); // name Alice, age 25
}
// 1. Iterating keys with Object.keys()
const person = { name: "Tushar", age: 25, city: "Kolkata" };

for (let key of Object.keys(person)) {
  console.log(key);  
}
// Output: name, age, city
