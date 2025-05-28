// Example 1
// Subtract all numbers in an array:
let arr = [4, 2, 2];

function myFunc(total, num) {
  return total - num;
} 

let result = arr.reduce(myFunc);

console.log(result);
//: 0
// it's like (4 - 2 - 2 = 0)

// Example 2
// Round all the numbers and display the sum:
let numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}

let result_2 = numbers.reduce(getSum, 0);

console.log(result_2);
//: 24

// Description:
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// Note:
// At the first callback, there is no return value from the previous callback.
// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.

// See Also:
// The Array reduceRight() Method

// Syntax:
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// Parameters
// function() 	Required.  // A function to be run for each element in the array.
// Reducer function parameters:
	// total 	Required.  // The initialValue, or the previously returned value of the function.
	// currentValue 	Required.  // The value of the current element.
	// currentIndex 	Optional.  // The index of the current element.
	// arr 	Optional.  // The array the current element belongs to.
// initialValue 	Optional.  // A value to be passed to the function as the initial value.

// Return:
// The accumulated result from the last call of the callback function.

// History:
// reduce() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013
