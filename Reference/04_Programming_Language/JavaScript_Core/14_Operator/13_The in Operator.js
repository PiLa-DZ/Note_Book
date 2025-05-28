// The in Operator:
// The in operator returns true if a property is in an object, otherwise false:

// Example 1 ==========================================================
let person = {
	firstName:"John", 
	lastName:"Doe", 
	age:50
};

console.log("firstName" in person) //: true
console.log("age" in person)	   //: true
console.log("address" in person)   //: false


/* Note: ---------------------------------------------------

	You cannot use in to check for array content like ("Volvo" in cars).

	Array properties can only be index (0,1,2,3...) and length.

	See the examples below.

--------------------------------------------------------- */

// Example 2 ==========================================================
let cars = ["Saab", "Volvo", "BMW"];
console.log("Saab" in cars);
//: false

// Example 3 ==========================================================
cars = ["Saab", "Volvo", "BMW"];

console.log(0 in cars);        //: true
console.log(1 in cars);        //: true
console.log(4 in cars);        //: false
console.log("length" in cars); //: true

// Example 4 ==========================================================
console.log("PI" in Math);       //: true
console.log("NaN" in Number);    //: true
console.log("length" in String); //: true
