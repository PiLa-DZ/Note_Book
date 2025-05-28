// Create a Promise Object
let myPromise = new Promise(function(myResolve, myReject) {
	let result = false;

	// Code that might take some time goes here

	if (result == true) {
		myResolve("OK");
	} else {
		myReject("Error");
	}
});

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
	// The then() method provides two callbacks:
	// One funtion to run when a promise is fulfilled and one funtion to run when a promise is rejected.

// Syntax:
	// promise.then(fulfilled(), rejected())

// Parameters:
	// fulfilled() 	Function to run when the promise is fulfilled
	// rejected() 	Function to run when the promise is rejected

// Return:
	// Object	A new Promise Object

// History:
// then() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
