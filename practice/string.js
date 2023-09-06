console.log("strings in javascript")
// we can use either double quotes or single quotes to define a string in javascript you can use any of them according to your likings

//Strings
let firstName = "Jai";
let lastName = "Shukla";
console.log(firstName,lastName);

//String Concatination

// Method 1 Using + Operator

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// Method 2 Using template literals
let fullName = `My Name Is ${firstName} ${lastName}` // for using template literals we must use backticks 
console.log(fullName);

// Getting a character from a string 
console.log(firstName[0]); // As we all know a string is just like array of characters so we can use index

//String Methods 
console.log(firstName.toLocaleLowerCase());// this will convert all the characters of a string to lower case
console.log(lastName.toLocaleUpperCase()); // this will convert all the characters to uppercase

console.log(lastName.indexOf("u")); //this method will return the index of the string or character

let newName = 'reuccuringg';
console.log(newName.lastIndexOf("c")); //this will return the last index of the string 

// Common string Methods

let newStr = "    this is a new string    "
console.log(newStr)
// trim Method 
let anothrStr = newStr.trim(); //this method will trim unnecessary spaces from the string
console.log(anothrStr) 

console.log(newStr.indexOf("this"));
console.log(newStr.indexOf("This"));// javascript is case-sensitive language which means it treats uppercase and lowercase differently so i will return -1
console.log(anothrStr.indexOf("this")); // it will return 0 

// includes Method

console.log(anothrStr.includes("this")) // include is used to return true or false if certain value is present in the string or not

// slice Method

let newFullName = "Jai Kumar Shukla";

console.log(newFullName.slice(0,7)); // the slice function is used to return or slice a part from string with the given indexes but excluding the last index 0-6 indexes will be printed in the current scenario
//strings are immutable in nature which means a certain sting cannot be changed directly in a program

let sliceName = newFullName.slice(0,9);
console.log("Original String  =", newFullName);
console.log("Extracted String = ", sliceName);

// String "split" Method 

let newFruits = "Apple Bannana Grapes Pear Guava"
let arrFruits = newFruits.split(' '); // here the split Method will split all the string and return it like an array on the basis of spaces in the string
console.log(arrFruits)
let anothrFruits = "One,Two,Three,Four,Five"
let anothrNewFruits = anothrFruits.split(",");
console.log(anothrNewFruits)

// Strings in javascript are immutable

let str = "hello";
str = str + "Learners";
console.log(str);

