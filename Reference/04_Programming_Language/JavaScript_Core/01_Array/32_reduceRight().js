// Example 1
// Subtract the numbers in the array, starting from the end:
let numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
} 

let result = numbers.reduceRight(myFunc);

console.log(result);
//: -200
// it's like (25 - 50 - 175 = -200)

// Example 2
// Subtract the numbers, right-to-left, and display the sum:
let numbers_2 = [2, 45, 30, 100];

function getSum(total, num) {
  return total - num;
}

let result_2 = numbers_2.reduceRight(getSum);

console.log(result_2);
//: 23
// it's like (100 - 30 - 45 - 2 = 23)

// Description:
// The reduceRight() method executes a reducer function for each array element.
// The reduceRight() method works from right to left.
// The reduceRight() method returns a single value: the function's accumulated result.
// The reduceRight() method does not execute the function for empty elements.

// Note:
// At the first callback, there is no return value from the previous callback.
// Normally, the last array element is used as initial value, and the iteration starts from the element before.
// If an initial value is supplied, this is used, and the iteration starts from last element.

// See Also:
// The Array reduce() Method

// Syntax:
// array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)

// Parameters:
// function() 	Required.  // A function to be run for each element in the array.
// Reducer function parameters:
	// total 	Required.  // The initialValue, or the previously returned value of the function.
	// currentValue 	Required.  // The value of the current element.
	// currentIndex 	Optional.  // The index of the current element.
	// arr 	Optional.  // The array the element belongs to.
// initialValue 	Optional.  // A value to be passed to the function as the initial value

// Return:
// The accumulated result from the last call of the callback function.

// History:
// reduceRight() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013
