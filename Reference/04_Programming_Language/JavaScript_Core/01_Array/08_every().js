// Example 1
// Create an Array
const ages = [32, 33, 16, 40];

// Create a Test Function
function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
let result = ages.every(checkAge)

console.log(result);
//: false


// Example 2
console.log([1,2,3].every(elm => elm > 0))
//: true


// Description:
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array


// Array Iteration Methods:
// The Array entries() Method
// The Array every() Method
// The Array filter() Method
// The Array forEach() Method
// The Array keys() Method
// The Array map() Method

// Syntax:
// array.every(function(currentValue, index, arr), thisValue)

// Parameters:
// function() 	Required.  // A function to be run for each element in the array.
// currentValue Required.  // The value of the current element.
// index		Optional.  // The index of the current element.
// arr			Optional.  // The array of the current element.
// thisValue 	Optional.  // Default undefined.  // A value passed to the function as its this value.

// Return:
// Boolean	true if all elements pass the test, otherwise false.

// History:
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013
