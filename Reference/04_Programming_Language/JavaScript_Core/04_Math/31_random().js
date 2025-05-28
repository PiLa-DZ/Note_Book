// Examples:
let a = Math.random();
console.log('a',a);
//: 0.42678015971753425

// Return a random number between 0 (inclusive) and 10 (exclusive):
let b = Math.random() * 10;
console.log('b',b);
//:
5.623175501173485

// Return a random number between 0 (inclusive) and 100 (exclusive):
let c = Math.random() * 100;
console.log('c',c);
//: 2.212630543929084

// A random whole number between 1 and 10 (inclusive):
let d = Math.floor((Math.random() * 10) + 1);
console.log('d',d);
//: 3

// A random whole number between 1 and 100 (inclusive):
let e = Math.floor((Math.random() * 100) + 1);
console.log('e',e);
//: 18

// Description:
// The Math.random() method returns a random floating point number between 0 (inclusive) and 1 (exclusive).

// Note:
// Math.random() does not return a cryptographically secure number.
// If you need a cryptographically secure number, use this Crypto API method:
// crypto.getRandomValues()

// Syntax:
// Math.random()

// Parameters:
// NONE

// Return:
// Number	A random number from 0 (inclusive) up to but not including 1 (exclusive).

// History:
// Math.random() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
