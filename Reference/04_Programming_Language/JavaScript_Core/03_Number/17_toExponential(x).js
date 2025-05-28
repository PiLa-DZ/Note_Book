// Example 1 ====================================================================
// Convert a number into an exponential notation:
let num_1 = 5.56789;
let result_1 = num_1.toExponential(); 
console.log(result_1);
//: 5.56789e+0

// Description:
// The toExponential() method converts a number into an exponential notation.

// Example 2 ====================================================================
let num_2 = 5.56789;
let result_2 = num_2.toExponential(3); 
console.log(result_2);
//: 5.568e+0

// Syntax:
// number.toExponential(x)

// Parameters:
// x 	Optional. An integer between 0 and 20 representing the number of digits in the notation after the decimal point. If omitted, it is set to as many digits as necessary to represent the value

// Return:
// A String, representing the number as an exponential notation.

// History:
// toExponential() is an ECMAScript3 (ES3) feature.
// ES3 (JavaScript 1999) is fully supported in all browsers:
