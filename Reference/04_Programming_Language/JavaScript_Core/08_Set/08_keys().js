// Create a Set
const letters = new Set(["a","b","c"]);

// Get the Values
const myIterator = letters.keys();

// List the Values
let text = "";
for (const x of myIterator) {
  text += x;
}

console.log('text', text);
//: abc

// Description:
// The keys() method returns an Iterator object with the values in a set.
// The keys() method does not change the original set.

// Note:
// Since a set has no keys, the keys() method returns the same as values().
// This makes JavaScript sets compatible with JavaScript maps.

// Syntax:
// set.keys()

// Parameters:
// NONE

// Return:
// Iterator	An iterable object with the values of the set.

// History:
// set.keys() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
