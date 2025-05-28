// Decode a URI after encoding it:
let uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";

let encoded = encodeURIComponent(uri);
console.log('encoded', encoded);
//: https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab

let decoded = decodeURIComponent(encoded);
console.log('decoded', decoded);
//: https://w3schools.com/my test.asp?name=ståle&car=saab

// Description:
// The decodeURIComponent() method decodes a URI component.

// Note:
// Use the encodeURIComponent() method to encode a URI component

// See Also:
// The encodeURI() method to encode a URI
// The decodeURI() method to decode a URI

// Syntax:
// decodeURIComponent(uri)

// Parameters:
	// uri 	Required.
	// The URI to be decoded.

// Return:
// A string	The decoded URI.

// History:
// decodeURIComponent() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
