// Example 1 ==========================================================
// Declare a function that outputs "Hello World" when it is called:
// Declare a function
function f_1() {
	console.log("Hello World!");
}

// Call the function
f_1();
//: Hello World!

// Example 2 ==========================================================
// Return the value of PI:
function f_2() {
  return Math.PI;
} 

console.log(f_2());
//: 3.141592653589793

// Example 3 ==========================================================
// Return the product of a and b:
function f_3(a, b) {
  return a * b;
} 

console.log(f_3(4, 4));
//: 16

// Example 4 ==========================================================
// A function with different arguments can produce different results.
// Convert Fahrenheit to Celsius:

function f_4(Fahrenheit) {
  return (5 / 9) * (Fahrenheit - 32);
} 

console.log(f_4(32));
//: 0
console.log(f_4(44));
//: 6.666666666666667

// Example 5 ==========================================================
function f_5(Fahrenheit) {
  return (5 / 9) * (Fahrenheit - 32);
} 

// Functions can be used as variables.
// Instead of:
let temp = f_5(32);
let text = "The temperature is " + temp + " Centigrade";
console.log(text);
//: The temperature is 0 Centigrade

// You can use:
text = "The temperature is " + f_5(32) + " Centigrade";
console.log(text);
//: The temperature is 0 Centigrade

// Example 6 ==========================================================
// JavaScript functions have a built-in object called arguments.
// The arguments.length property returns the number of arguments received by the function:

function f_6(a, b) {
  return arguments.length;
} 

console.log(f_6(3, 8));
//: 2

// Example 7 ==========================================================
// When a function expression is stored in a variable, the variable contains a function:
let f_7 = function (a, b) {return a * b};

console.log(f_7(4, 4));
//: 16

// Example 8 ==========================================================
// When a function is stored in a variable, the variable can be used as a function:
let f_8 = function (a, b) {return a * b};
let z = f_8(4, 3); 

console.log(z);
//: 12

// Description:
	// The function statement declares a function.
	// A declared function is "saved for later use", and will be executed later, when it is invoked (called).
	// In JavaScript, functions are objects, and they have both properties and methods.
	// A function can also be defined using an expression (See Function Definitions).
	// Read our JavaScript Tutorial to learn all you need to know about functions. Start with the introduction chapter about JavaScript Functions and JavaScript Scope. For more detailed information, see our Function Section on Function Definitions, Parameters, Invocation and Closures.

// See Also:
	// The return statement.

// Syntax:
	/*
		function functionName(parameters) {
			code to be executed
		}
	*/

// Parameters:
	// functionName 	Required.
		// The name of the function.
		// Naming rules: same as JavaScript variables.
	// parameters 	Optional.
		// A set of arguments (parameter names), separated by commas.
 
		// The arguments are real values received by the function from the outside.
		// Inside the function, the arguments are used as local variables.
 
		// If a function is called with a missing argument, the value of the missing argument is set to undefined.
 
// History:
// function is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
