// Get the third element of fruits:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.at(2));
//: Apple

console.log(fruits.at(-1));
//: Mango

// Description:
// The at() method returns an indexed element from an array.
// The at() method returns the same as [].
// The at() method is supported in all modern browsers since March 2022:

// Note:
// Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.
// This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
// The at() method was introduced in ES2022 to solve this problem.

// Syntax:
// array.at(index)

// Parameters:
// index 	Optional.  // The index (position) of the array element to be returned.  // Default is 0.  // -1 returns the last element.

// Return:
// Element	The element of the given position (index) in the array.

// History:
// JavaScript Array at() is supported in all browsers since March 2022
