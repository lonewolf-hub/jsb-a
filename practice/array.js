//array
console.log("arrays in javascript");

let dishes = ['Briyani',"chat" ,"parathay"];

//Access
// console.log(arrayName[index eg: 0]);

console.log(dishes[0]);

//Modify the Array

dishes[0] = 'Kopta';
console.log(dishes[0]);// The Given index will be over written

//Array Methods
//join Method
// console.log(dishes.join()) default join method will return with comma (,)
console.log(dishes.join("-"))// to change the joint symbol between indexes

// indexOf
console.log(dishes.indexOf("chat")) //case sensitive

// concat Method

let newDishes = ["Gulab-Jamun", "Pani-Poori"];
let morNewdishes = newDishes.concat(newDishes);
console.log(dishes.concat(newDishes)); //this will not affect the old array we will only get a copy of the data and a concatinated array will be created
//this Console method expression does not stored any where so if we want to use that value first you need to store the value in a variable 
//length Method
console.log(morNewdishes.length); // its a kind of a property .length is not a function

//push Method 
console.log(morNewdishes.push("Matar-Paneer")); // push method will only return the length of the array the data will be pushed to the selected array
console.log(morNewdishes);

//pop Method

console.log(morNewdishes.pop()); // this method will return the value that has been poped or remove from the last index
console.log(morNewdishes);
