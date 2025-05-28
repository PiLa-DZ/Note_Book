// Example 1 ==========================================================
// Constant Array:
// Create an array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

console.log(cars);
//: [ 'Toyota', 'Volvo', 'BMW', 'Audi' ]

// Example 2 ==========================================================
// Constant Object:
// Create an object:
const car = {
	type:"Fiat", 
	model:"500", 
	color:"white"
};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

console.log(car);
/*: 
{ 
	type: 'Fiat', 
	model: '500', 
	color: 'red', 
	owner: 'Johnson' 
}

// Description:
	// The const statement declares a variable.
	// Variables are containers for storing information.
	// Creating a variable in JavaScript is called "declaring" a variable:
		// const name = "Volvo";

/* Note: ---------------------------------------------------

	A const variable must be assigned when it is declared.

--------------------------------------------------------- */

// See Also:
	// JavaScript Reference: JavaScript var
	// JavaScript Reference: JavaScript let

// Tutorials:
	// JavaScript Tutorial: JavaScript Variables
	// JavaScript Tutorial: JavaScript const
	// JavaScript Tutorial: JavaScript let
	// JavaScript Tutorial: JavaScript Scope

// Syntax:
	// const name = value;

// Parameters:
	// name 	Required.
		// The name of the variable.
		// Variable names must follow these rules:

		// Must begin with a letter, or $, or _
		// Names are case sensitive (y and Y are different)
		// Reserved JavaScript words cannot be used as names
	// value 	Required.
		// A value to be assigned to the variable.


/* ---------------------------------------------------------
When to use JavaScript const?:

	As a general rule, always declare a variable with const unless you know that the value will change.

	Use const when you declare:

		A new Array
		A new Object
		A new Function
		A new RegExp

--------------------------------------------------------- */

// History:
// const is supported in all modern browsers:
// const is an ECMAScript6 (ES6 - JavaScript 2015) feature.
