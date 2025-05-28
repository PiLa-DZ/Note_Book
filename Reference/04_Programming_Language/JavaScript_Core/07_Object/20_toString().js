// Example 1 ================================================
// Using toString() on an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();
console.log('text', text);
//: Banana,Orange,Apple,Mango

// Example 2 ================================================
// Using toString() on an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const keys = person.toString();
console.log('keys', keys);
//: [object Object]

// Example 3 ================================================
// Using Object.toString() on an object:
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const keys2 = Object.toString(person2);
console.log('keys2', keys2);
//: function Object() { [native code] }

// Description:
// The toString() method returns an object as a string.
// The toString() method returns "[object Object]" if it cannot return a string.
// Object.toString() always returns the object constructor.
// The toString() method does not change the original object.

// Note:
// Every JavaScript object has a toString() method.
// The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
// Normally, you will not use it in your own code.

// History:
// toString() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
					// 
