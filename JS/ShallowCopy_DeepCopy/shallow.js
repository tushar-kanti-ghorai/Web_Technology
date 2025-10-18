let obj1 = { 
  name: "Tushar", 
  address: { city: "Kolkata" } 
};

let obj2 = { ...obj1 };  // shallow copy using spread
console.log(obj1.address.city);
obj2.name = "Ravi";  
obj2.address.city = "Delhi";  

console.log(obj1);     // "Tushar" ✅ (separate copy)
console.log(obj2); // "Delhi" ❌ (nested object shared)

let num1=10;
num2=num1;
console.log(num2);
num2=20;
console.log(num1);
console.log(num2);