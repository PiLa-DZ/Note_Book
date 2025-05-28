// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupBy(fruits, myCallback);

console.log('result', result);
/* Map(2) {
  'ok' => [
    { name: 'apples', quantity: 300 },
    { name: 'bananas', quantity: 500 }
  ],
  'low' => [
    { name: 'oranges', quantity: 200 },
    { name: 'kiwi', quantity: 150 }
  ]
}
*/

// Description:
// The Map.groupBy() method groups elements of an object according to string values returned from a callback function.
// The Map.groupBy() method does not change the original object.

// Note:
// The elements in the original and in the returned object are the same.
// Changes will be reflected in both the original and in the returned object.

// Object.groupBy() vs Map.groupBy():
// The difference between Object.groupBy() and Map.groupBy() is:
// Object.groupBy() groups elements into a JavaScript object.
// Map.groupBy() groups elements into a Map object.

// Syntax:
// Map.groupBy(iterable, callback)

// Parameters:
	// iterable 	Required.
		// An iterable array or map.
	// callback 	Required.
		// A function to execute for each element.
		// The function should return a group name for the element.

// Return:
	// Object	A Map object with the grouped elements.

// History:
// Map.groupby() is an ES2024 feature.
// It is fully supported in all modern browsers since March 2024:
