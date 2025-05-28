// Example 1 ===========================================================
let text_1 = "Is this all there is?";
let pattern_1 = /[^h]/g;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
/*: [
  'I', 's', ' ', 't', 'i',
  's', ' ', 'a', 'l', 'l',
  ' ', 't', 'e', 'r', 'e',
  ' ', 'i', 's', '?'
]
*/

// ---------------------------------------------------------------------
// Tip:
// Use the [abc] expression to find any character BETWEEN the brackets.
// ---------------------------------------------------------------------

// Example 2 ===========================================================
// Do a global search for characters that are NOT "i" and "s" in a string:
let text_2 = "Do you know if this is all there is?";
let pattern_2 = /[^is]/gi; 
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
/*: [
  'D', 'o', ' ', 'y', 'o', 'u',
  ' ', 'k', 'n', 'o', 'w', ' ',
  'f', ' ', 't', 'h', ' ', ' ',
  'a', 'l', 'l', ' ', 't', 'h',
  'e', 'r', 'e', ' ', '?'
]
*/

// Example 3 ===========================================================
// Do a global search for the character-span NOT from lowercase "a" to lowercase "h" in a string:
let text_3 = "Is this all there is?";
let pattern_3 = /[^a-h]/g;
let result_3 = text_3.match(pattern_3);

console.log('result_3', result_3);
/*: [
  'I', 's', ' ', 't',
  'i', 's', ' ', 'l',
  'l', ' ', 't', 'r',
  ' ', 'i', 's', '?'
]
*/

// Example 4 ===========================================================
// Do a global search for the character-span NOT from uppercase "A" to uppercase "E":
let text_4 = "I SCREAM FOR ICE CREAM!";
let pattern_4 = /[^A-E]/g;
let result_4 = text_4.match(pattern_4);

console.log('result_4', result_4);
/*: [
  'I', ' ', 'S', 'R',
  'M', ' ', 'F', 'O',
  'R', ' ', 'I', ' ',
  'R', 'M', '!'
]
*/

// Example 5 ===========================================================
// Do a global search for the character-span NOT from uppercase "A" to lowercase "e":
let text_5 = "I Scream For Ice Cream, is that OK?!";
let pattern_5 = /[^A-e]/g;
let result_5 = text_5.match(pattern_5);

console.log('result_5', result_5);
/*: [
  ' ', 'r', 'm', ' ', 'o',
  'r', ' ', ' ', 'r', 'm',
  ',', ' ', 'i', 's', ' ',
  't', 'h', 't', ' ', '?',
  '!'
]
*/

// ---------------------------------------------------------------------
// Tip: 
// Use the [abc] expression to find any character between the brackets.
// ---------------------------------------------------------------------

// Example 6 ===========================================================
// Do a global, case-insensitive search for the character-span that's NOT [a-s]:
let text_6 = "I Scream For Ice Cream, is that OK?!";
let pattern_6 = /[^a-s]/gi;
let result_6 = text_6.match(pattern_6);

console.log('result_6', result_6);
/*: [
  ' ', ' ', ' ', ' ',
  ',', ' ', ' ', 't',
  't', ' ', '?', '!'
]
*/

// Description:
	// Brackets [^abc] specifies matches for any character NOT between the brackets.
	// Brackets can define single characters, groups, or character spans:
	// [^abc]	Not any of the characters a, b, or c
	// [^A-Z]	Not any character from uppercase A to uppercase Z
	// [^a-z]	Not any character from lowercase a to lowercase z
	// [^A-z]	Not any character from uppercase A to lowercase z

// Syntax:
	// new RegExp("[^xyz]")
	// or simply:
	// /[^xyz]/
// Syntax with modifiers:
	// new RegExp("[^xyz]", "g")
	// or simply:
	// /[^xyz]/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /[^abc]/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
