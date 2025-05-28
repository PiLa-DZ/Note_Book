// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator = letters.entries();

// List all Entries
let text = "";
for (const entry of myIterator) {
  text += entry;
}

console.log('text', text);
//: a,ab,bc,c

// Description:
// The entries() method returns an Iterator with [value,value] pairs from a set.

// Note:
// The entries() method is supposed to return a [key,value] pair from an object.
// Since a set has no keys, the entries() method returns [value,value].
// This makes Sets compatible with Maps.

// Syntax:
// set.entries()

// Parameters:
// NONE

// Return:
// Iterator	An iterable object with the values of the set.

// History:
// set.entries() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
