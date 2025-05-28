// Example
const myArr = new Int8Array(10);
console.log(myArr)
/*:
	Int8Array(10) [
	  0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0
	]
*/

// JavaScript Typed Arrays:
// In Javascript, a typed array is an array-like buffer of binary data.
// There is no JavaScript property or object named TypedArray, but properties and methods can be used with typed array objects:

// Typed Array Objects:
	// Object:				Data Type:						Range: 
	// Int8Array			Signed integer (byte)			-128/127 	
	// Uint8Array			Unsigned integer (octet)		0/255 	
	// Uint8ClampedArray 	Unsigned integer (octet)	 	0/255 	
	// Int16Array			Short integer					-32768/32767 	
	// Uint16Array			Unsigned short integer			0/65535 	
	// Int32Array			Signed long integer				-231/231-1 	
	// Uint32Array			Unsigned long integer			0/232 	
	// Float32Array			Float - 7 significant digits 	1.2x10-38/3.4x1038 	
	// Float64Array			Double - 16 significant digits 	5.0x10-324/1.8x10308 	
	// BigInt64Array		Big signed integer				-263/263-1 	
	// BigUint64Array		Big unsigned integer			0/264 	

/* Note: ---------------------------------------------------

	Typed arrays are not arrays.

	isArray() on a typed array returns false.

	Many array methods (like push and pop) are not 
	supported by typed arrays.

	Typed arrays are array-like objects for 
	storing binary data in memory.

--------------------------------------------------------- */

// Typed Array Methods and Properties:
	// Method / Property: 	Description:
	// BYTES_PER_ELEMENT 	Property to count the number of bytes used to store one element 	
	// fill()				Fill all elements with a value 	
	// find()				Returns the first element that satisfies a condition 	
	// name					Returns the name of the typed array 	
	// of()					Method to create a typed array from an array 	
	// some()				Reurns true if one element satisfies a condition 	

// Uint8Array vs Uint8ClampedArray:
	// The difference between an Uint8Array and an Uint8ClampedArray is how values are added.
	// If you set one element in an Uint8ClampedArray to a value outside the 0-255 range, it will default to 0 or 255.
	// A typed array will just take the first 8 bits of the value.

// Typed Array Benefits:
	// Typed arrays provide a way to handle binary data as efficiently as arrays work in C.
	// Typed arrays are raw memory, so JavaScript can pass them directly to any function without converting the data to another representation.
	// Typed arrays are seriously faster than normal arrays for passing data to functions that can use raw binary data (Computer Games, WebGL, Canvas, File APIs, Media APIs).

// Browser APIs Supporting Typed Arrays:
// Fetch API Example
/*
	fetch(url)
	.then(request => request.arrayBuffer())
	.then(arrayBuffer =>...);
*/

// Canvas Example
/*
	const canvas = document.getElementById('my_canvas');
	const context = canvas.getContext('2d');
	const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	const uint8ClampedArray = imageData.data;
*/

// History:
// typedArray is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
