let o1 = {
	a:'a1',
	b:'b1',
	c:'c1',
	d:'d1'
}

let o2 = {
	b:'b2',
	c:'c2'
}

Object.assign(o1, o2);

console.log(o1);
//: { a: 'a1', b: 'b2', c: 'c2', d: 'd1' }

console.log(o2);
//: { b: 'b2', c: 'c2' }

// Description:
// The Object.assign() method copies properties from one or more source objects to a target object.

// Syntax:
// Object.assign(target, source(s))

// Parameters:
	// target 	Required.
		// An existing object.
	// source 	Required.
		// One or more sources.

// Return:
// Object	The target object.

// History:
// Object.assign() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
