// Example 1 ==========================================================
// Loop a code block as long as a i is less than 5:
let text = "";
let i = 0;
while (i < 5) {
  text += i + " ";
  i++;
}
console.log(text);
//: 0 1 2 3 4 

// Example 2 ==========================================================
// Loop (iterate over) an array to collect car names:
let cars = ["BMW", "Volvo", "Saab", "Ford"];
text = "";
i = 0;
while (i < cars.length) {
  text += cars[i] + " ";
  i++;
} 
console.log(text);
//: BMW Volvo Saab Ford 

// Example 3 ==========================================================
// Loop over an array in descending order (negative increment):
cars = ["BMW", "Volvo", "Saab", "Ford"];
text = "";
let len = cars.length;
while (len--) {
  text += cars[len] + " ";
}
console.log(text);
//: Ford Saab Volvo BMW 

// Example 4 ==========================================================
// Using break - Loop through a block of code, but exit the loop when i == 3:
text = "";
i = 0;
while (i < 5) {
  text += i + " ";
  i++;
  if (i == 3) break;
}
console.log(text)
//: 0 1 2 

// Example 5 ==========================================================
// Using continue - Loop through a block of code, but skip the value 3:
text = "";
i = 0;
while (i < 5) {
  i++;
  if (i == 3) continue;
  text += i + " ";
}
console.log(text);
//: 1 2 4 5 

/* Note: ---------------------------------------------------

     The loop starts in position 0 (let i = 0).
     The loop increments i for each run (i++).
     The loop runs as long as i < cars.length.

--------------------------------------------------------- */

// Description:
	// The while statement creates a loop (araund a code block) that is executed while a condition is true.
	// The loop runs while the condition is true. Otherwise it stops.

// JavaScript Loop Statements:
	// break		Breaks out of a loop	
	// continue		Skips a value in a loop	
	// while		Loops a code block while a condition is true	
	// do...while	Loops a code block once, and then while a condition is true	
	// for			Loops a code block while a condition is true	
	// for...of		Loops the values of any iterable	
	// for...in		Loops the properties of an object	

// Syntax:
	/*
		while (condition) {
			code block to be executed
		}
	*/

// Parameters:
	// condition 	Required.
		// The condition for running the code block. If it returns true, the code clock will start over again, otherwise it ends.

/* Note: ---------------------------------------------------

	If the condition is always true, the loop will never end. 
	This will crash your browser.

	If you use a variable in the condition, 
	you must initialize it before the loop, 
	and increment it within the loop. 
	Otherwise the loop will never end. 
	This will also crash your browser.

--------------------------------------------------------- */

// History:
// while is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
