// Example 1 ==========================================================
// Loop (iterate over) a code block five times:
let text = ''
for (let i = 0; i < 5; i++) {
  text += i + " ";
}
console.log(text);
//: 0 1 2 3 4 

// Example 2 ==========================================================
// Loop (iterate over) an array to collect car names:
let cars = ["BMW", "Volvo", "Saab", "Ford"];
text = ''
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}
console.log(text);
//: BMW Volvo Saab Ford 


/* ---------------------------------------------------------

    The loop starts in position 0 (let i = 0).
    The loop automatically increments i for each run.
    The loop runs as long as i < cars.length.

--------------------------------------------------------- */

// Description:
	// The for statement defines a code block that is executed as long as a condition is true.


/* Note: ---------------------------------------------------

	If you omit statement 2, you must provide a break inside the loop.

	Otherwise the loop will never end. This will crash your browser. 

--------------------------------------------------------- */

// See Also:
	// The JavaScript for Tutorial

// Syntax:
	/*
		for (statement 1; statement 2; statement 3) {
		  code block to be executed
		}
	*/

// Parameters:
	// statement 1 	Optional.
		// Executed before the code block starts.
		// Normally used to initialize a counter variable.
		// To initiate multiple values, separate each value with a comma.

		// This parameter can be omitted, but not the semicolon ";"

	// statement 2 	Optional.
		// The condition for running the code block.
		// If it returns true the loop will start over again, otherwise the loop will end.

		// This parameter can be omitted, but not the semicolon ";"

	// statement 3 	Optional.
		// Executed after the code block.
		// Normally used to increment the counter variable.

		// This parameter can be omitted (e.g. to increase/decrease values inside the loop)

// JavaScript Loop Statements:
	// break		Breaks out of a loop	
	// continue		Skips a value in a loop	
	// while		Loops a code block while a condition is true	
	// do...while	Loops a code block once, and then while a condition is true	
	// for			Loops a code block while a condition is true	
	// for...of		Loops the values of any iterable	
	// for...in		Loops the properties of an object

// History:
// for is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
