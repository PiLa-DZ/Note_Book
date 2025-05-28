// Create an Array
let arr = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
let list = arr.values();

// List the Values
for (let x of list) {
	console.log(x)
}

//: 
// Banana
// Orange
// Apple
// Mango

// Description:
// The values() method returns an Iterator object with the values of an array.
// The values() method does not change the original array.

// Array Iteration Methods:
// The Array entries() Method
// The Array every() Method
// The Array filter() Method
// The Array forEach() Method
// The Array keys() Method
// The Array map() Method

// Syntax:
// array.values()

// Parameters:
// NONE

// Return:
// Iterator	An Iterator object containing the values of an array.

// History:
// values() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
