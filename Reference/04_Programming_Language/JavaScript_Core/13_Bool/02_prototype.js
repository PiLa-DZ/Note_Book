// Make a new method for JavaScript booleans:
Boolean.prototype.myColor = function() {
  if (this.valueOf() == true) {
    return "green";
  } else {
    return "red";
  }
};

// Create a boolean, then call myColor():
let a = true;
let color = a.myColor();

console.log('color', color);
//: green

// Description:
	// prototype allows you to add new properties and methods to booleans.
	// prototype is a property available with all JavaScript objects.

// Syntax:
	// Boolean.prototype.name = value

/* ---------------------------------------------------------------------------------
Warning:
You are not advised to change the prototype of an object that you do not control.
You should not change the prototype of built in JavaScript datatypes like:
    Numbers
    Strings
    Arrays
    Dates
    Booleans
    Function
    Objects
Only change the prototype of your own objects.
--------------------------------------------------------------------------------- */

// History:
// prototype is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
