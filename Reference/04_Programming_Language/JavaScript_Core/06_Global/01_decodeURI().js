// Decode a URI after encoding it:
let uri = "my test.asp?name=ståle&car=saab";

let encoded = encodeURI(uri);
console.log('encoded', encoded);
//: my%20test.asp?name=st%C3%A5le&car=saab

let decoded = decodeURI(encoded);
console.log('decoded', decoded);
//: my test.asp?name=ståle&car=saab

// Description:
// The decodeURI() method decodes a URI.

// Note:
// Use the encodeURI() method to encode a URI

// See Also:
// The encodeURIComponent() method to encode a URI
// The decodeURIComponent() method to decode a URI

// Syntax:
// decodeURI(uri)

// Parameters:
	// uri 	Required.
	// The URI to decode.

// Return:
// A string	The decoded URI.

// History:
// decodeURI() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
