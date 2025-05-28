let text = "The rain in Spain stays mainly in the plain";
let pattern = /ain/g;

let result = "";
while (pattern.test(text)==true)  {
  result += "Found at position " + pattern.lastIndex + "\n";
}

console.log(`result ${'='.repeat(22)}`);
console.log(result);
/*:
Found at position 8
Found at position 17
Found at position 28
Found at position 43
*/

// Description:
	// The lastIndex property specifies the index at which to start the next match.

// Note: This property only works if the "g" modifier is set.
	// This property returns an integer that specifies the character position immediately after the last match found by exec( ) or test( ) methods.

// Note: exec( ) and test( ) reset lastIndex to 0 if they do not get a match.

// Syntax:
	// RegExpObject.lastIndex

// Return:
	// Number 	An integer that specifies the character position immediately after the last match found by exec( ) or test( ) methods

// History:
// lastIndex is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
