// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "Queen");
});

// Run when All promises are settled
Promise.allSettled([myPromise1, myPromise2]).then((results) =>
	results.forEach((x) => myDisplay(x.status)),
);

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
	// The Promise.allSettled() method returns a single Promise from a list of promises, when all promises sette.

// Syntax:
	// Promise.allSettled(iterable)

// Parameters:
	// iterable 	An Array of promises

// Return:
	// Object	A new Promise Object

// History:
// Promise.allSettled() is supported in all modern browsers since March 2020:
