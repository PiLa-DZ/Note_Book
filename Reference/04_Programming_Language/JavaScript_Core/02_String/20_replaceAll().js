// Example 1 =================================================================
let str = "I love cats. Cats are very easy to love. Cats are very popular."
let result_1 = str.replaceAll("Cats","Dogs");
let result_2 = str.replaceAll("cats","dogs");

console.log(result_1);
//: I love cats. Dogs are very easy to love. Dogs are very popular.

console.log(result_2);
//: I love dogs. Cats are very easy to love. Cats are very popular.

// Example 2 =================================================================
let str_2 = "I love cats. Cats are very easy to love. Cats are very popular."
let result_3 = str_2.replaceAll(/Cats/g,"Dogs");
let result_4 = str_2.replaceAll(/cats/g,"dogs");

console.log(result_3);
//: I love cats. Dogs are very easy to love. Dogs are very popular.

console.log(result_4);
//: I love dogs. Cats are very easy to love. Cats are very popular.

// Description:
// The replaceAll() method searches a string for a value or a regular expression.
// The replaceAll() method returns a new string with all values replaced.
// The replaceAll() method does not change the original string.
// The replaceAll() method was introduced in JavaScript 2021.
// The replaceAll() method does not work in Internet Explorer.

// Note:
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
// Read more about regular expressions in our:
    // RegExp Tutorial
    // RegExp Reference

// Syntax:
// string.replaceAll(searchValue, newValue)

// Parameters:
// searchValue 	Required.  // The value, or regular expression, to search for.
// newValue 	Required.  // The new value (to replace with).  // This parameter can be a JavaScript function.

// Return:
// A string	A new string where the search values has been replaced.

// History:
// Nothing

