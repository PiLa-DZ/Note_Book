// Example 1 ==========================================================
// Iterate (loop) over the values of an array:
let text = "";
let cars = ['BMW', 'Volvo', 'Mini'];
for (let x of cars) {
  text += x + " ";
}
console.log(text);
//: BMW Volvo Mini 

// Example 2 ==========================================================
// Iterate (loop) over the values of a string:
text = "JavaScript";
let text_1 = '';
for (let x of text) {
  text_1 += x + " ";
}
console.log(text_1);
//: J a v a S c r i p t 

// Description:
	// The for...of statements combo iterates (loops) over the values of any iterable.
	// The code block inside the loop is executed once for each value.

// See Also:
	// JavaScript Tutorial: The JavaScript for...of Tutorial

// Syntax:
	/*
		for (x of iterable) {
			code block to be executed
		}
	*/

// Parameters:
	// x 	Required.
		// For every iteration the value of the next property is assigned to x.
	// iterable 	Required.
		// Anything that has iterable properties.

// JavaScript Loop Statements:
	// break		Breaks out of a loop	
	// continue		Skips a value in a loop	
	// while		Loops a code block while a condition is true	
	// do...while	Loops a code block once, and then while a condition is true	
	// for			Loops a code block while a condition is true	
	// for...of		Loops the values of any iterable	
	// for...in		Loops the properties of an object	

// History:
// for..of is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
