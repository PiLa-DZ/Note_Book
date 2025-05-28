// Join two arrays:
let a = ['a', 'b'];
let b = ['c', 'd'];
let c = a.concat(b);

console.log(a);
//: [ 'a', 'b' ]

console.log(b);
//: [ 'c', 'd' ]

console.log(c);
//: [ 'a', 'b', 'c', 'd' ]

// Description:
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.


// See Also:
// The join() Method
// The slice() Method
// The splice() Method
// The copyWithin() Method

// Syntax:
// array1.concat(array2, array3, ..., arrayX)

// Parameters:
// array1,... 	Required.  // The array(s) to be concatenated.

// Return:
// Array	The content from the joined arrays.

// History:
// ES1 (JavaScript 1997) is fully supported in all browsers
