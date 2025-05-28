// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "Queen");
});

// Run when Any promise fulfills
Promise.any([myPromise1, myPromise2]).then((x) => {
	myDisplay(x);
});

// Funtion to run when a Promise is settled:
function myDisplay(some) {
	document.getElementById("demo").innerHTML += some;
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
	// The Promise.any() method returns a single Promise from a list of promises, when any promise fulfill.

// Syntax:
	// Promise.any(iterable)

// Parameters:
	// iterable 	An Array of promises

// Return:
	// Object	A new Promise Object

// History:
// Promise.any() is supported in all modern browsers since September 2020:
