let arr = ['a', 'b', 'c'];
arr.forEach((elm, i) => {
	console.log(i, elm);
});

//: 
// 0 a
// 1 b
// 2 c

// Description:
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.


// Array Iteration Methods:
// The Array entries() Method
// The Array every() Method
// The Array filter() Method
// The Array forEach() Method
// The Array keys() Method
// The Array map() Method

// Syntax:
// array.forEach(function(currentValue, index, arr), thisValue)

// Parameters:
// function() 	Required.  // A function to run for each array element.
// currentValue 	Required.  // The value of the current element.
// index 	Optional.  // The index of the current element.
// arr 	Optional.  // The array of the current element.
// thisValue 	Optional. Default undefined.  // A value passed to the function as its this value.

// Return:
// undefined

// History:
// forEach() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013
