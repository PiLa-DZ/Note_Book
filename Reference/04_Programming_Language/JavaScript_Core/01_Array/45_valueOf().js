// Example 1
// Get the value of fruits:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let myArray = fruits.valueOf(); 
console.log(myArray);
//: [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// Example 2
// fruits.valueOf() returns the same as fruits:
let fruits_2 = ["Banana", "Orange", "Apple", "Mango"];
let myArray_2 = fruits_2;
console.log(myArray_2);
//: [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// Description:
// The valueOf() method returns the array itself.
// The valueOf() method does not change the original array.
// fruits.valueOf() returns the same as fruits.

// Syntax:
// array.valueOf()

// Parameters
// NONE

// Return:
// An array	The valueOf() method returns itself!

// History:
// valueOf() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
