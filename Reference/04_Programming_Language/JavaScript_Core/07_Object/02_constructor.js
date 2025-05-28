// Get the object constructor:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let text = person.constructor;
console.log('text', text);
//: function Object() { [native code] }


// Description:
// The constructor property returns the function that created the Object prototype.
// For JavaScript objects the constructor property returns:
// function Object() { [native code] }

// Syntax:
// object.constructor

// Return:
// function Object() { [native code] }

// History:
// constructor is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
