let str = "ABCDEFG"
let arr = Array.from(str);

console.log(arr);
//: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]

// Description:
// The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object.

// Array.from():
// Array.from() is a static property of the JavaScript Array object.
// You can only use it as Array.from().
// Using x.from(), where x is an array will return undefined.

// Syntax:
// Array.from(object, mapFunction, thisValue)

// Parameters:
// object 	Required.  // The object to convert to an array.
// mapFunction 	Optional.  // A map function to call on each item.
// thisValue 	Optional.  // A value to use as thisfor the mapFunction

// Return:
// An array	The values from the iterable object.

// History:
// Array.from() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
