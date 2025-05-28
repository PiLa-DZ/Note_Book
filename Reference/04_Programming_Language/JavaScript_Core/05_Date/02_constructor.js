// Get the Date constructor:
const d = new Date();
let text = d.constructor;
console.log('text', text);
//: function Date() { [native code] }

// Description:
// The constructor property returns the function that created the Date prototype.
// For JavaScript dates the constructor property returns:
// function Date() { [native code] }

// Syntax:
// Date.constructor

// Return:
// function Date() { [native code] }

// History:
// constructor is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
