// Example 1 ==========================================================
// Iterate (loop) over the properties of an object:
let person = {
	fname:"John", 
	lname:"Doe", 
	age:25
};

let text = "";

for (let x in person) {
  text += person[x] + " ";
}

console.log(text);
//: John Doe 25 

// Example 2 ==========================================================
// Iterate (loop) over the values of an array:
let cars = ["BMW", "Volvo", "Saab", "Ford"];

text = "";

for (let x in cars) {
  text += cars[x] + " ";
}

console.log(text);
//: BMW Volvo Saab Ford 

// Example 3 ==========================================================
// Iterate over the properties of window.location:

/* <<<<<<<<<<<<<<<<<<<<<<<<<
// Note: --> Run this code in browser.

text = "";

for (let x in location) {
  text += x + "\n";
}

console.log(text);
<<<<<<<<<<<<<<<<<<<<<<<<< */

/*:
href
origin
protocol
host
hostname
port
pathname
search
hash
assign
replace
reload
toString
*/

// Example 4 ==========================================================
// Iterate over the properties of window.location:

// /* <<<<<<<<<<<<<<<<<<<<<<<<<
// Note: --> Run this code in NodeJS.

text = "";

for (let x in global) {
  text += x + "\n";
}

console.log(text);
// <<<<<<<<<<<<<<<<<<<<<<<<< */

/*:
global
clearImmediate
setImmediate
clearInterval
clearTimeout
setInterval
setTimeout
queueMicrotask
structuredClone
atob
btoa
performance
fetch
crypto
navigator
*/


// Description:
	// The for...in statements combo iterates (loops) over the properties of an object.
	// The code block inside the loop is executed once for each property.

/* Note: ---------------------------------------------------

	Do not use for...in to iterate an array if the index order is important. Use a for loop instead.

--------------------------------------------------------- */

// Syntax:
	/*
		for (x in object) {
			code block to be executed
		}
	*/

// Parameters:
	// x 	Required.
		// A variable to iterate over the properties.
	// object 	Required.
		// The object to be iterated

// JavaScript Loop Statements:
	// break		Breaks out of a loop	
	// continue		Skips a value in a loop	
	// while		Loops a code block while a condition is true	
	// do...while	Loops a code block once, and then while a condition is true	
	// for			Loops a code block while a condition is true	
	// for...of		Loops the values of any iterable	
	// for...in		Loops the properties of an object

// History:
// for...in is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
