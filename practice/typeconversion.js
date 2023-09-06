console.log("type conversion in javascript")

let strType = "53";
console.log(strType, typeof strType);

//Number Method
let nmbrType = Number(strType);
console.log(nmbrType, typeof nmbrType);

//Imp Note 
// In Number Method passing String Must be Numeric values

let numberType = 67;
console.log(numberType,typeof numberType)

// String Method

let stringType = String(numberType);
console.log(stringType, typeof stringType)

// Boolean Method  true/false
// let newAge = ""; The Blank string and number 0 is false in javascript

let newAge = 78;
let booleanValueOfAge = Boolean(newAge);
console.log('Boolean Value Of Age Is ', booleanValueOfAge,"and the type of age is",typeof booleanValueOfAge)