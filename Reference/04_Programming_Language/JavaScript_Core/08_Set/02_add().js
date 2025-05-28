// The add() Method
// Create a new Set
const letters = new Set(["a","b","c"]);


// Add a new Element
letters.add("d");
letters.add("e");

// Display set.size
console.log('size', letters.size);
//: 5

console.log('letters', letters);
//: Set(5) { 'a', 'b', 'c', 'd', 'e' }

// Description:
// The add() method inserts a new element in the set.

// Syntax:
// set.add(value)

// Parameters:
	// value 	Required.
		// The value to add.

// Return:
	// Set	A set object with the added value.

// History:
// set.add() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
