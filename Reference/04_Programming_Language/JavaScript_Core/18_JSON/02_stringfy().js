// Example 1 ==========================================================
// Stringify a JavaScript object:
var obj_1 = { "name":"John", "age":30, "city":"New York"};

var myJSON = JSON.stringify(obj_1);

console.log(myJSON);
//: {"name":"John","age":30,"city":"New York"}

// Example 2 ==========================================================
// Using the replacer function:
/* replace the value of "city" to upper case: */
var obj_2 = { "name":"John", "age":"39", "city":"New York"};

var text_2 = JSON.stringify(obj_2, function (key, value) {
	if (key == "city") {
		return value.toUpperCase();
	} else {
		return value;
	}
});
console.log(text_2);
//: {"name":"John","age":"39","city":"NEW YORK"}

// Example 3 ==========================================================
// Using the space parameter:
/* Insert 10 space characters for each white space: */
var obj_3 = { "name":"John", "age":"39", "city":"New York"};

var text_3= JSON.stringify(obj_3, null, 10);

console.log(text_3);
/*: 
{
          "name": "John",
          "age": "39",
          "city": "New York"
}
*/

// Example 4 ==========================================================
// Using the space parameter:
/*Insert the word SPACE for each white space:*/
var obj_4 = { "name":"John", "age":"39", "city":"New York"};

var text_4 = JSON.stringify(obj_4, null, "SPACE");

console.log(text_4);
/*:
{
SPACE"name": "John",
SPACE"age": "39",
SPACE"city": "New York"
}
*/

// Description:
	// The JSON.stringify() method converts JavaScript objects into strings.
	// When sending data to a web server the data has to be a string.

// Syntax:
	// JSON.stringify(obj, replacer, space)

// Parameter:
	// obj 	Required. The value to convert to a string
	// replacer 	Optional. Either a function or an array used to transform the result. The replacer is called for each item.
	// space 	Optional. Either a String or a Number.
		// A string to be used as white space (max 10 characters),
		// or a Number, from 0 to 10, to indicate how many space characters to use as white space.

// Technical Details:
	// Return Value: 	A String
	// JavaScript Version: 	ECMAScript 5

// History:
// The numbers in the table specify the first browser version that fully supports the method.
