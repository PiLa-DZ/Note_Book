// Encode a URI:
let uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
let encoded = encodeURIComponent(uri); 
console.log('encoded', encoded);
//: https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab

// Description:
// The encodeURIComponent() method encodes a URI component.
// The encodeURIComponent() method encodes special characters including: , / ? : @ & = + $ #

// Note:
// Use the decodeURIComponent() function to decode an encoded URI component.

// See Also:
// The encodeURI() method to encode a URI
// The decodeURI() method to decode a URI

// Syntax:
// encodeURIComponent(uri)

// Parameters:
	// uri 	Required.
	// The URI to be encoded.

// Return:
// A string	The encoded URI.

// History:
// encodeURIComponent() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
