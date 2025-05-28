// Example 1 ============================================
// Get the value of fruits:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();
console.log('myArray', myArray);
//: [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// Example 2 ============================================
// fruits.valueOf() returns the same as fruits:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const myArray2 = fruits2;
console.log('myArray2', myArray2);
//: [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// Description:
// The valueOf() method returns the primitive value of an object.
// If the object has no primitive value, valueOf() returns the object itself.
// The valueOf() method does not change the original object.

// Note:
// fruits.valueOf() returns the same as fruits.

// Syntax:
// object.valueOf()

// Parameters:
// NONE

// Return:
	// The primitive value of an object.
		// If the object has no primitive value, valueOf() returns the object itself.

// History:
// valueOf() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
