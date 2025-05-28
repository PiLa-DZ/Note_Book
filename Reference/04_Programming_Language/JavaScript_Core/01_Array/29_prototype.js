// Create a method that transforms array values into upper case:
Array.prototype.myUcase = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

// Use the method on any array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase(); 

console.log(fruits)
//: [ 'BANANA', 'ORANGE', 'APPLE', 'MANGO' ]

// Description:
// prototype allows you to add new properties and methods to arrays.
// prototype is a property available with all JavaScript objects.

// Syntax:
// Array.prototype.name = value 


/* Warning ==========================================================================

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

================================================================================== */

// History:
// prototype is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
