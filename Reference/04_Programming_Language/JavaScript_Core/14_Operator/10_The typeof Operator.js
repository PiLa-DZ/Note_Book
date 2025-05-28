// The typeof Operator:
// The typeof operator returns the type of a variable, object, function or expression:
console.log(typeof "John")					//: string
console.log(typeof 3.14)					//: number
console.log(typeof NaN)						//: number
console.log(typeof false)					//: boolean
console.log(typeof [1, 2, 3, 4])			//: object
console.log(typeof {name:'John', age:34})	//: object
console.log(typeof new Date())				//: object
console.log(typeof function () {})			//: function
console.log(typeof myCar)					//: undefined
console.log(typeof null)					//: object

/* Note: ---------------------------------------------------

	You cannot use typeof to define if a JavaScript 
		object is an array or a date.

	Both array and date return object as type.

--------------------------------------------------------- */
