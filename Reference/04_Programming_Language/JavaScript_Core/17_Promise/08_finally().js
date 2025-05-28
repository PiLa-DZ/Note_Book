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

// Using finally()
myPromise.finally(myDisplay("Execution Settled"));

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
	// The finally() method provides a callback.
	// The callback is a function to run when a promise is settled (fulfilled or rejected).

// Syntax:
	// promise.finally(settled())

// Parameters:
	// settled() 	Function to run when the promise is settled (fulfilled or rejected)

// Return:
	// Object	A new Promise Object

// History:
// finally() is an ECMAScript 2018 feature.
// ES2017 is supported in all modern browsers since June 2020:
