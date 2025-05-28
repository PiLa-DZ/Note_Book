// Encode a URI:
let uri = "my test.asp?name=ståle&car=saab";
let encoded = encodeURI(uri);
console.log('encoded', encoded);
//: my%20test.asp?name=st%C3%A5le&car=saab

// Description:
// The encodeURI() method encodes a URI.

// Note:
// Use the decodeURI() method to decode a URI.
// Special Characters
// The encodeURI() method does not encode characters like:
// , / ? : @ & = + $ * #
// Use the encodeURIComponent() method instead.

// See Also:
// The encodeURIComponent() method to encode a URI
// The decodeURIComponent() method to decode a URI
// The decodeURI() method to decode a URI

// Syntax:
// encodeURI(uri)

// Parameters:
	// uri 	Required.
	// The URI to encode.

// Return:
// A string.	The encoded URI.

// History:
// encodeURI() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
