// Match every text that starts or ends with aa or bb:
let text = "aaaabb";
let result = text.match(/(aa)(bb)/d);

console.log('result', result);
/*: [
  'aabb',
  'aa',
  'bb',
  index: 2,
  input: 'aaaabb',
  groups: undefined,
  indices: [ [ 2, 6 ], [ 2, 4 ], [ 4, 6 ], groups: undefined ]
]
*/

// Description:
// The "d" modifier specifies the start and end of match.
// The "d" modifier is case-sensitive.

// Syntax:
// new RegExp("regexp", "d")
// or simply:
// /regexp/d

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /regexp/d is an ES2022 feature.
// JavaScript 2022 (ES2022) is supported in all modern browsers since March 2023:
