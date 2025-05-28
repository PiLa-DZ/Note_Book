let months = ["Januar", "Februar", "Mar", "April"];

let myMonths = months.with(2, "March");

console.log(myMonths);
//: [ 'Januar', 'Februar', 'March', 'April' ]

// Description:
// The with() method updates a specified array element.
// The with() method returns a new array.
// The with() method does not change the original array.

// Syntax:
// array.with(index, value)

// Parameters:
// index 	Required.  // The index (position) of the item to change.  // A negative index counts from the end of the array.
// value 	Required.  // The new value.

// Return:
// A new array containing the changed element.

// History:
// with() is an ES2023 feature.
// It is supported in all modern browsers since July 2023

