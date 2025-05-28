// Example 1 ============================
// A global search for "is":
let text1 = "Is this all there is?";
let pattern1 = /is/g;
let result1 = text1.match(pattern1); 

console.log('result1', result1);
//: [ 'is', 'is' ]

// Example 2 ============================
// Using the RegExp function exec():
let text2 = "Is this all there is?";
let pattern2 = /is/g;
let result2 = pattern2.exec(text2);

console.log('result2', result2);
//: [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// Example 3 ============================
// Using the RegExp function test():
let text3 = "Is this all there is?";
let pattern3 = /is/g;
let result3 = pattern3.test(text3);

console.log('result3', result3);
//: true

// Example 4 ============================
// Using the String function match():
let text4 = "Is this all there is?";
let pattern4 = /is/g;
let result4 = text4.match(pattern4); 

console.log('result4', result4);
//: [ 'is', 'is' ]

// ----------------------------------------------------------------------------------------------
// Tip:
// For a global, case-insensitive search, use the "i" modifier together with the g modifier.
// A global, case-insensitive search for "is":
// ----------------------------------------------------------------------------------------------
// Example 5 ============================
// Using the RegExp function exec():
let text5 = "Is this all there is?";
let result5 = /is/gi.exec(text5);

console.log('result5', result5);
//: [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

// Example 6 ============================
// Using the RegExp function test():
let text6 = "Is this all there is?";
let result6 = /is/gi.test(text6);

console.log('result6', result6);
//: true

// Example 7 ============================
// Using the String function match():
let text7 = "Is this all there is?";
let result7 = text7.match(/is/gi);

console.log('result7', result7);
//: [ 'Is', 'is', 'is' ]

// ----------------------------------------------------------------------------------------------
// Tip
// You can use the global property to check if the g modifier is set.
// ----------------------------------------------------------------------------------------------

// Example 8 ============================
let pattern8 = /W3S/g;
let result8 = pattern8.global;

console.log('result8', result8);
//: true


// Description
// The "g" modifier specifies a global match.
// A global match finds all matches (not only the first).

// Syntax
	// new RegExp("regexp", "g")
	// or simply:
	// /regexp/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /regexp/g is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
