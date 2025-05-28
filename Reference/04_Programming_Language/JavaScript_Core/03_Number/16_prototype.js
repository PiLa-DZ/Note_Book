// Create a new number method that returns a number's half value:
Number.prototype.myMethod = function() {
  return this.valueOf() / 2;
};

// Use the new method on a number:
let n = 55;
let x = n.myMethod();
console.log(x);
//: 27.5

// Description:
// prototype allows you to add new properties and methods to numbers.
// prototype is a property available with all JavaScript objects.

// Syntax:
// Number.prototype.name = value

/* Warning ======================================================================

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

============================================================================== */



// History:
// Number.prototype is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
