// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Values
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
  text += entry;
}

console.log('text', text);
//: abc

// Description:
// The values() method returns an Iterator object with the values in a set.
// The values() method does not change the original set.

// Syntax:
// set.values()

// Parameters:
// NONE

// Return:
// Iterator	An iterable object with the values of the set.

// History:
// set.values() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
