// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Delete an Element
fruits.delete("apples");

console.log('fruits', fruits);
//: Map(2) { 'bananas' => 300, 'oranges' => 200 }

// Description:
// The delete() method deletes an element from a map.

// Syntax:
// map.delete(key)

// Parameters:
	// key 	Required.
		// The key of the element to delete.

// Return:
// Boolean	true if the element existed, otherwise false.

// History:
// map.delete() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
