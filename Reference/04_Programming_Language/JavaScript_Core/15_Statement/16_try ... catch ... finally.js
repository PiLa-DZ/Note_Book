// Example 1 ==========================================================
// This example has a typo in the try block. Alert is misspelled.
// The catch block catches the error and executes the code to handle it:
try {
	adddlert("Welcome guest!");
}
catch(err) {
	console.log(err.message);
}
//: adddlert is not defined


// Example 2 ==========================================================
// The finally statement executes code, after regardless of the try result:

let fun_input = my_input => {
	let msg = '';
	try { 
		if(my_input   <  5) throw "too low";
		if(my_input   > 10) throw "too high";
		if(my_input  == "") throw "is Empty";
		if(isNaN(my_input)) throw "not a number";
		console.log(my_input, "is a Good Number");
	}
	catch(err) {
		console.log("Your input is :", my_input);
		console.log("Your input"     , err);
		console.log("Please input a number between 5 and 10:");
	}
	finally {
		console.log('\n', '-'.repeat(33));
	}
}

// Test Output 1: If my_input is Low ==================================
fun_input(4);
/*:
	Your input is : 4
	Your input too low
	Please input a number between 5 and 10:

	 ---------------------------------
*/

// Test Output 2: If my_input is High =================================
fun_input(20);
/*:
	Your input is : 20
	Your input too high
	Please input a number between 5 and 10:

	 ---------------------------------
*/

// Test Output 3: If my_input is High =================================
fun_input('');
/*:
	Your input is : 
	Your input too low
	Please input a number between 5 and 10:

	 ---------------------------------
*/

// Test Output 4: If my_input is Not a Number =========================
fun_input('text');
/*:
	Your input is : text
	Your input not a number
	Please input a number between 5 and 10:

	 ---------------------------------
*/

// Test Output 5: If my_input is Good =================================
fun_input(7);
/*: 
	7 is a Good Number

	 ---------------------------------
*/

// Description:
	// When an error occurs, JavaScript will stop and generate an error message.

/* Note: ---------------------------------------------------

	The technical term for this is is: 
	JavaScript throws an exception.

	JavaScript creates an Error object with two properties: 
	name and message.

--------------------------------------------------------- */

// The try...catch...finally statements combo handles errors without stopping JavaScript.
// The try statement defines the code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.
// Both catch and finally are optional, but you must use one of them.

/* Note: ---------------------------------------------------

	Using throw with try and catch, 
	lets you control program flow and generate custom error messages.

--------------------------------------------------------- */

// See Also:
	// The JavaScript throw
	// JavaScript Error Object
	// JavaScript Errors Tutorial

// Syntax:
	/*
		try {
			tryCode - Code block to run
		}
		catch(err) {
			catchCode - Code block to handle errors
		}
		finally {
			finallyCode - Code block to be executed regardless of the try result
		}
	*/

// Parameters:
	// tryCode 	Required.
		// Code block to be tested while executing.
		// err 	A local reference to the error object.
	// catchCode 	Optional.
		// Code block to execute if an error occurs.
	// finallyCode 	Optional.
		// Code block to execute regardless of the try result

// History:
// try...catch is an ECMAScript3 (ES3) feature.
// ES3 (JavaScript 1999) is fully supported in all browsers:
