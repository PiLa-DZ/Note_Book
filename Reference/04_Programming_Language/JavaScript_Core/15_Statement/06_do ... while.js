// Execute a code block once, an then continue if condition (i < 5) is true:
let text = "";
let i = 0;
do {
  text += i + ' ';
  i++;
}
while (i < 5); 

console.log(text);
//: 0 1 2 3 4 

// Description:
// The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.
// The do...while is used when you want to run a code block at least one time.


/* Note: ---------------------------------------------------

	If you use a variable in the condition, you must initialize it before the loop, and increment it within the loop. Otherwise the loop will never end. This will crash your browser.

	If the condition is always true, the loop will never end. This will also crash your browser.

--------------------------------------------------------- */

// See Also:
	// The JavaScript While Loop Tutorial

// Syntax:
	/*
	do {
	  code block to be executed
	}
	while (condition);
	*/

// Parameters:
	// condition 	Required.
		// The condition for running the code block.
		// If true, the loop will start over again, otherwise it ends.

// JavaScript Loop Statements:
	// break	    Breaks out of a loop	
	// continue	    Skips a value in a loop	
	// while	    Loops a code block while a condition is true	
	// do...while	Loops a code block once, and then while a condition is true	
	// for	        Loops a code block while a condition is true	
	// for...of  	Loops the values of any iterable	
	// for...in 	Loops the properties of an object	

// History:
// do..while is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
