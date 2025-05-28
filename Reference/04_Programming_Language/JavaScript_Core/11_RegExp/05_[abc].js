// Example 1 ==============================================================
// A global search for the character "h" in a string:
let text_1 = "Is this all there is?";
let pattern_1 = /[h]/g;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ 'h', 'h' ]

// ------------------------------------------------------------------------
// Tip:
// Use the [^abc] expression to find any character NOT between the brackets.
// ------------------------------------------------------------------------

// Example 2 ==============================================================
// Do a global search for the characters "i" and "s" in a string:
let text_2 = "Do you know if this is all there is?";
let pattern_2 = /[is]/gi; 
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
//: [ 'i', 'i', 's', 'i', 's', 'i', 's' ]

// Example 3 ==============================================================
// A global search for the character span from lowercase "a" to lowercase "h" in a string:
let text_3 = "Is this all there is?";
let pattern_3 = /[a-h]/g;
let result_3 = text_3.match(pattern_3);

console.log('result_3', result_3);
//: [ 'h', 'a', 'h', 'e', 'e' ]

// Example 4 ==============================================================
// Do a global search for the character-span from uppercase "A" to uppercase "E":
let text_4 = "I SCREAM FOR ICE CREAM!";
let pattern_4 = /[A-E]/g;
let result_4 = text_4.match(pattern_4);

console.log('result_4', result_4);
//: [ 'C', 'E', 'A', 'C', 'E', 'C', 'E', 'A' ]

// Example 5 ==============================================================
// A global search for the character span from uppercase "A" to lowercase "e" (will search for all uppercase letters, but only lowercase letters from a to e.)
let text_5 = "I Scream For Ice Cream, is that OK?!";
let pattern_5 = /[A-e]/g;
let result_5 = text_5.match(pattern_5);

console.log('result_5', result_5);
//: [ 'I', 'S', 'c', 'e', 'a', 'F', 'I', 'c', 'e', 'C', 'e', 'a', 'a', 'O', 'K' ]

// Example 6 ==============================================================
// A global, case-insensitive search for the character span [a-s]:
let text_6 = "I Scream For Ice Cream, is that OK?!";
let pattern_6 = /[a-s]/gi;
let result_6 = text_6.match(pattern_6);

console.log('result_6', result_6);
/*: [
  'I', 'S', 'c', 'r', 'e',
  'a', 'm', 'F', 'o', 'r',
  'I', 'c', 'e', 'C', 'r',
  'e', 'a', 'm', 'i', 's',
  'h', 'a', 'O', 'K'
]
*/

// Example 7 ==============================================================
// A "g" and "gi" search for characters:
let text_7 = "THIS This this";

let result1_7 = text_7.match(/[THIS]/g);
let result2_7 = text_7.match(/[THIS]/gi);

console.log('result1_7', result1_7);
//: [ 'T', 'H', 'I', 'S', 'T' ]

console.log('result2_7', result2_7);
/*:
[
  'T', 'H', 'I', 'S',
  'T', 'h', 'i', 's',
  't', 'h', 'i', 's'
]
*/

// Description:
	// Brackets [abc] specifies matches for the characters inside the brackets.
	// Brackets can define single characters, groups, or character spans:
	// [abc]	Any of the characters a, b, or c
	// [A-Z]	Any character from uppercase A to uppercase Z
	// [a-z]	Any character from lowercase a to lowercase z
	// [A-z]	Any character from uppercase A to lowercase z

// Syntax:
	// new RegExp("[abc]")
	// or simply:
	// /[abc]/

// Syntax with modifiers:
	// new RegExp("[abc]", "g")
	// or simply:
	// /[abc]/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
// Example	Description
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// // History:
// /[abc]/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
