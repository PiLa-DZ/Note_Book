// Create a Promise Object
let myPromise = Promise.reject("Not Allowed");

// Using then()
myPromise.then(x => myDisplay(x), x => myDisplay(x));

// Funtion to run when Promise is settled:
function myDisplay(some) {
	document.getElementById("demo").innerHTML = some;
}

/* --> you have to create index.html file to run your code
<!DOCTYPE html>
<html>
<body>
	<p id="demo"></p>
</body>
</html>
*/

// Description:
	// The Promise.reject() method returns a Promise object rejected with a value.

// Syntax:
	// Promise.reject(message)

// Parameters:
	// message 	Argument to be used as reject value

// Return:
	// Object	A new Promise Object

// History:
// Promise.Reject() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
