// Return the error name:
try {
  adddlert("Welcome guest!");
}
catch(err) {
  console.log(err.name);
}
//: ReferenceError

// Description:
	// The name property sets or returns the name of an error.
	// Six different values can be returned by the error name property:

// Error Name:
	// EvalError	Deprecated - use SyntaxError instead	 
	// RangeError	A number "out of range" has occurred	
	// ReferenceError	An illegal reference has occurred	
	// SyntaxError	A syntax error has occurred	
	// TypeError	A type error has occurred	
	// URIError	An error in encodeURI() has occurred	

// See Also:
	// The message property of the Error object.

// Syntax:
	// errorObj.name

// Return:
	// A string	The name of the error.

// History:
// error.name is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
