// Example 1 ==========================================================
// Break out of a loop when i is 3:
let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  text += `${i} `;
}
console.log(text); 
//: 0 1 2 

// Example 2 ==========================================================
text = "";
let i = 0;
while (i < 5) {
  text += `${i} `;
  i++;
  if (i === 3) break;
}
console.log(text); 
//: 0 1 2 

// Example 3 ==========================================================
// Break out of a switch block when a case is true:
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log(day);
//: Wednesday


// Example 4 ==========================================================
// Break out of a list:
let cars = ["BMW", "Volvo", "Saab", "Ford"];
text = "";

list: {
  text += cars[0] + ' '; 
  text += cars[1] + ' '; 
  text += cars[2] + ' '; 
  break list;
  text += cars[3] + ' '; 
}
console.log(text);
//: BMW Volvo Saab 

// Example 5 ==========================================================
// Break out of a nested loop:
text = "";

// The first for loop is labeled Loop1:
Loop1:
for (let i = 0; i < 3; i++) {
	text += `${i} `;

	// The second for loop is labeled Loop2:  
	Loop2:
	for (let i = 10; i < 15; i++) {
		text += `${i} `;
		if (i === 12) break Loop1;
	}
}
console.log(text);
//: 0 10 11 12 

// Description:
	// The break statement breaks out of a switch or a loop.
	// In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch.
	// In in a loop, it breaks out of the loop and continues executing the code after the loop (if any).

// Using Lables:
	// The break statement can use a label reference, to break out of any JavaScript code block (see "More Examples" below).
	// Without a label, break can only be used inside a loop or a switch.

// Syntax:
	// break;

// Using the optional label reference:
	// break labelname;

// Related Pages:
	// JavaScript Tutorial: JavaScript Break and Continue
	// JavaScript Tutorial: JavaScript For Loop
	// JavaScript Tutorial: JavaScript While Loop
	// JavaScript Tutorial: JavaScript Switch
	// JavaScript Reference: JavaScript continue Statement
	// JavaScript Reference: JavaScript for Statement
	// JavaScript Reference: JavaScript while Statement
	// JavaScript Reference: JavaScript switch Statement

// History:
// break is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
