let fun_input = my_input => {
	let msg = '';
	try { 
		if(my_input   <  5) throw "too low";
		if(my_input   > 10) throw "too high";
		if(my_input  == "") throw "is Empty";
		if(isNaN(my_input)) throw "not a number";
		console.log(my_input, "is a Good Number\n");
	}
	catch(err) {
		console.log("Your input is :", my_input);
		console.log("Your input"     , err);
		console.log("Please input a number between 5 and 10:\n");
	}
}

// Test Output 1: If my_input is Low ==================================
fun_input(4);
/*:
	Your input is : 4
	Your input too low
	Please input a number between 5 and 10:
*/

// Test Output 2: If my_input is High =================================
fun_input(20);
/*:
	Your input is : 20
	Your input too high
	Please input a number between 5 and 10:
*/

// Test Output 3: If my_input is High =================================
fun_input('');
/*:
	Your input is : 
	Your input too low
	Please input a number between 5 and 10:
*/

// Test Output 4: If my_input is Not a Number =========================
fun_input('text');
/*:
	Your input is : text
	Your input not a number
	Please input a number between 5 and 10:
*/

// Test Output 5: If my_input is Good =================================
fun_input(7);
//: 7 is a Good Number

// Description:
	// The throw statement allows you to create a custom error.
	// The throw statement throws (generates) an error.
	// The technical term for this is:
	// The throw statement throws an exception.
	// The exception can be a JavaScript String, a Number, a Boolean or an Object:
		// throw "Too big";  // throw a text
		// throw 500;        // throw a number
		// throw false;      // throw a boolean
		// throw person;     // throw an object

/* Note: ---------------------------------------------------

	Using throw with try and catch, 
	lets you control program flow and generate custom error messages.

--------------------------------------------------------- */

// See Also:
	// The JavaScript try...catch...finally
	// JavaScript Error Object
	// JavaScript Errors Tutorial

// Syntax:
	// throw expression;

// Parameters:
	// expression 	Required.
		// The exception to throw.
		// Can be a string, number, boolean, or an object

// History:
// break is an ECMAScript3 (ES3) feature.
// ES3 (JavaScript 1999) is fully supported in all browsers:
