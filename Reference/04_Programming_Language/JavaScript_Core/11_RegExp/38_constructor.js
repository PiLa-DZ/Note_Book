// The constructor property returns a regular expression's constructor function.
let pattern = /Hello World/g;
let text = pattern.constructor;

console.log('text', text);
//: function RegExp() { [native code] }

// Description:
	// The constructor property returns the function that created the RegExp prototype.
	// For a regular expression the constructor property returns:
	// function RegExp() { [native code] }

// Syntax:
	// RegExpObject.constructor

// Return:
	// function RegExp() { [native code] }

// History:
// constructor is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
