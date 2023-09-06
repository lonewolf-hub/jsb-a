console.log("Boolean values and Comparison Operator");

let booleanType = true;
let newStringType = "true";
console.log(booleanType,typeof booleanType, newStringType, typeof newStringType);

// Method returns Boolean Values

let email = 'jaissm002@gmail.com';
let booleanValue = email.includes("@");
console.log(booleanValue)

// Comparision Operators Always returns boolean value
// ==, ===, !==, !=
// >,>=
//<, <=

let newNum = 32;
console.log( newNum == "32");
console.log( newNum === 32);
console.log( newNum === "32");
console.log(newNum !== 3221);

// Javascript is a weakly typed language that simply means you doesn't tell javascript the type of data. javascript handles that part on its own or you can say javascript interprets type of data on its own

//Javascript can run in the head as well as body of the html
//cosole.log is print method of javascript which doesn't print the statements on main screen but on the console of your browser which you can find the developer tools of the browser

//you can simply perform task like calculation aur simple codes in the console

//Avoid using var in javascript it is a old way of declaring variables in javascript. A variable which can be redeclare and reinitialized more than once. var declare a global scope variable


// camelCase => javascript prefers camel case in variable name so it's a good practice.

//UpperCamelCase => Some variables like class will use upper camel case.

// Mutating vs Non-Mutating Methods
// mutating methods changes variables which called it for example array.push()

// non mutating methods are those methods which doesn't directly affects the variable which called it for ex indexOf

// immutability of string : you cannot change a string after initialisation like: array[0], words.includes('f'), words.trim(), words.slice(0,10) ,words.split(" ") these methods doesn't change any thing it only returns a value.


