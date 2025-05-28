// Example 1 ==========================================================
// Loop through a block of code, but skip the value of 3:
let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  text += i + ' ';
}
console.log(text);
//: 0 1 2 4 

// Example 2 ==========================================================
text = "";
let i = 0;
let a = true
while (i < 5) {
  i++;
  if (i === 3 ) continue;
  text += i + ' ';
}
console.log(text);
//: 1 2 4 5 

// Example 3 ==========================================================
// Skip the numbers 2 and 3 (using the OR operator):
text = "";
for (let i = 1; i < 8; i++) {
  if (i === 2 || i === 3) continue;
  text += i + ' ';
} 
console.log(text);
//: 1 4 5 6 7 

// Example 4 ==========================================================
// Loop over an array, but skip "Saab":
let cars = ["BMW", "Volvo", "Saab", "Ford"];
text = "";
for (let i = 0; i < cars.length; i++) {
  if (cars[i] === "Saab") {
    continue;
  }
  text += cars[i] + ' ';
}
console.log(text);
//: BMW Volvo Ford 

// Example 5 ==========================================================
// With a label reference, skip a value in a nested loop:
text = "";

// The first for loop is labeled Loop1:
Loop1:
for (let i = 0; i < 3; i++) {
	text += i + ' ';

	// The second for loop is labeled Loop2:
	Loop2:
	for (let i = 10; i < 15; i++) {
		if (i === 12) continue Loop2;
		text += i + ' ';
  }
}
console.log(text);
//: 0 10 11 13 14 1 10 11 13 14 2 10 11 13 14 

// Description:
	// The continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.
	// The difference between continue and the break statement, is instead of "jumping out" of a loop, the continue statement "jumps over" one iteration in the loop.

	// However, when the continue statement is executed, it behaves differently for different types of loops:
		// In a while loop, the condition is tested, and if it is true, the loop is executed again
		// In a for loop, the increment expression (e.g. i++) is first evaluated, and then the condition is tested to find out if another iteration should be done

	// The continue statement can also be used with an optional label reference.

	// Note: The continue statement (with or without a label reference) can only be used inside a loop.

// Syntax:
	// continue;

// Using the optional label reference:
	// continue labelname;

// History:
// continue is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
