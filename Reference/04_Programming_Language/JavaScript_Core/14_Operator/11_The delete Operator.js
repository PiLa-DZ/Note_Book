// The delete Operator:
// The delete operator deletes a property from an object:

const person = {
  firstname:"John",
  lastname:"Doe",
  age:50,
  eyecolor:"blue"
};

delete person.age;

console.log(person.age)
//: undefined

console.log(person.hahaha)
//: undefined

// The delete operator deletes both the value of the property and the property itself.
// After deletion, the property cannot be used before it is added back again.
// The delete operator is designed to be used on object properties. It has no effect on variables or functions.

/* Note: ---------------------------------------------------

	The delete operator should not be used on 
	the properties of any predefined JavaScript objects 
	(Array, Boolean, Date, Function, Math, Number, RegExp, and String).

	This can crash your application.

--------------------------------------------------------- */
