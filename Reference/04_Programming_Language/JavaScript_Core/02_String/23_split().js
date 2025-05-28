// Example 1
// Split the words:
let str_1 = "How are you doing today?";

let result_1 = str_1.split(" ");

console.log(result_1);
//: [ 'How', 'are', 'you', 'doing', 'today?' ]

// Example 2
// Split the words, and return the second word:
let str_2 = "How are you doing today?";

let result_2 = str_2.split(" ");

let second_word = result_2[1];

console.log(second_word);
//: are

// Example 3
// Split the characters, including spaces:
let str_3 = "How are you doing today?";

let result_3 = str_3.split("");

console.log(result_3);
//: [ 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 'd', 'o', 'i', 'n', 'g', ' ', 't', 'o', 'd', 'a', 'y', '?' ]

// Example 4
// Use the limit parameter:
let str_4 = "How are you doing today?";

let result_4 = str_4.split(" ", 3);

console.log(result_4);
//: [ 'How', 'are', 'you' ]

// Description:
// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.

// See Also:
// The slice() Method
// The substr() Method
// The substring() Method

// Syntax:
// string.split(separator, limit)

// Parameters:
// separator 	Optional.  // A string or regular expression to use for splitting.  // If omitted, an array with the original string is returned.
// limit 	Optional.  // An integer that limits the number of splits.  // Items after the limit are excluded.

// Return:
// Array	An array containing the splitted values.

// More Examples:
	// Split a string into characters and return the second character:
	// const myArray = text.split("");

	// Use a letter as a separator:
	// const myArray = text.split("o");

	// If the separator parameter is omitted, an array with the original string is returned:
	// const myArray = text.split();

// History:
// split() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

