// Return an error message:
try {
  adddlert("Welcome guest!");
}
catch(err) {
  console.log(err.message);
} 
//: adddlert is not defined

// Description:
	// The message property sets or returns an error message.

// See Also:
	// The name property of the Error object.

// Syntax:
	// errorObj.message

// Return:
	// A string describing the error (varies between browsers).

// History:
// error.name is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
