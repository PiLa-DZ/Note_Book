// Replace Microsoft:
let str_1 = "Visit Microsoft!";
let result_1 = str_1.replace("Microsoft", "W3Schools");
console.log(result_1);
//: Visit W3Schools!

// A global replacement:
let str_2 = "Mr Blue has a blue house and a blue car";
let result_2 = str_2.replace(/blue/g, "red");
console.log(result_2);
//: Mr Blue has a red house and a red car

// Description:
// The replace() method searches a string for a value or a regular expression.
// The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string.

// Note:
// If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the g modifier set.
// Read more about regular expressions in our:
    // RegExp Tutorial
    // RegExp Reference

// See Also:
// The replaceAll() Method - replaces all matches

// Syntax:
// string.replace(searchValue, newValue)

// Parameters:
// searchValue 	Required.  // The value, or regular expression, to search for.
// newValue 	Required.  // The new value (to replace with).

// Return:
// A string	A new string where the specified value(s) has been replaced.

// History:
// replace() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

