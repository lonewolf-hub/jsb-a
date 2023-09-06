console.log('Numbers in Javascript');
// Numbers data types in javascript

let point = 40;
console.log(point, typeof point);
// typeof is used to return the data type of variables

// let results = point /2;
let results = point % 2;
console.log(results)

//mathematical operations 

let newResult = point * 2 + (4*3) - 8 /2 %4;
//Using Priority and Precedence
// 1 () Brackets
// 2 ** Power operator
// 3 * / % (from left to right)
// 4 + - (from left to right)

console.log(newResult);

// Concatination of Numbers

let printResult = 'My total score is = ' + newResult;
console.log(printResult , typeof printResult);

// javascript is often called loosely typed language because of its dynamic conversion 

// loose Equality (==) Vs Strict Equality operator (===)

//Loose Equality Operator ==
let age = 22 //number data types
console.log(age == '22'); //focus only on value but not the type

// Strict Equality Oparator
console.log(age === '22'); // focus on both value and type


// loose Not equal Operator !=
// strict not equal Operator !==

