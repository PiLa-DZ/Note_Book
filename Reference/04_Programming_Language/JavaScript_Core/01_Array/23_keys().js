// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterable
const list = fruits.keys();

// List the Keys
let text = "";
for (let x of list) {
	console.log(x)
}

//:
// 0
// 1
// 2
// 3

// Description:
// The keys() method returns an Iterator object with the keys of an array.
// The keys() method does not change the original array.

// Array Iteration Methods:
// The Array entries() Method
// The Array every() Method
// The Array filter() Method
// The Array forEach() Method
// The Array keys() Method
// The Array map() Method

// Syntax
// array.keys()

// Parameters
// NONE

// Return:
// An array	An Array Iterator object containing the keys of an array.

// History:
// keys() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
