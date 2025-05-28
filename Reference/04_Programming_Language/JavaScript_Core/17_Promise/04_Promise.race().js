// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "Queen");
});

// Both resolves. Who is faster?
Promise.race([myPromise1, myPromise2]).then((x) => {
	myDisplay(x);
});

// Funtion to run when a Promise is settled:
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
	// The Promise.race() method returns a Promise from a list of promises, when the faster promise settles.

// Syntax:
	// Promise.race(iterable)

// Parameters:
	// iterable 	An Array of promises

// Return:
	// Object	A new Promise Object

// History:
// Promise.race() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
