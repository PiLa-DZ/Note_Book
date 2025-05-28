// Create a Promise Object
let myPromise = new Promise(function(myResolve, myReject) {
	throw "Error 444";
});

// Using catch()
myPromise.catch(x => myDisplay(x));

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
	// The catch() method provides a callback.
	// The callback is a function to run when a promise is rejected.

// Syntax:
	// promise.catch(rejected())

// Parameters:
	// rejected() 	Function to run when the promise is rejected

// Return:
	// Object	A new Promise Object

// History:
// catch() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
