let num = 123.5;

let result = num.constructor;

console.log(result);
//: function Number() { [native code] }

// Description:
// The constructor property returns the function that created the Number prototype.
// For JavaScript numbers the constructor property returns:
// function Number() { [native code] }

// Syntax:
// number.constructor

// Return:
// function Number() { [native code] }

// History:
// constructor is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
