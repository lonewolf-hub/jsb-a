console.log("variable constants and comments")

var num = 12;
var num = 22; //we don't use var in current scenario because it lets you to redeclare itself

console.log(num)

let point = 13;
// point = 17; the value of let declared variables can be changed after its declaration but we cannot redeclare the same variable with same identifier name
console.log(point)


// constants

const value = 15;
// value = 19; we cannot reassign a constant
console.log(value)

// in the current working scenario we should try to use const instead of var and let because it doesn't allow you to redeclare and reassign the same variable twice in a program 