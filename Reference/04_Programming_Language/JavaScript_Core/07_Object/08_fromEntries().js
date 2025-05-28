const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);

console.log('fruits', fruits)
//: [ [ 'apples', 300 ], [ 'pears', 900 ], [ 'bananas', 500 ] ]
console.log('myObj', myObj);
//: { apples: 300, pears: 900, bananas: 500 }

// Description:
// The fromEntries() method creates an object from a list of key/value pairs.

// Syntax:
// Object.fromEntries(iterable)

// Parameters:
	// iterable 	Optional.
		// An iterable array or map.

// Return:
// Object	The object created from the key/value pairs.

// History:
// ES2019 added the Object method fromEntries() to JavaScript.
// JavaScript Object fromEntries() is supported in all modern browsers since January 2020:
