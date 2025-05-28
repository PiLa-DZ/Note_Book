// Example 1 ==========================================================
// Execute a block of code based on user input:
var text;
var fruits = 'Banana';

switch(fruits) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
} 
console.log(text);
//: Banana is good!

// Example 2 ==========================================================
// Use today's weekday number to calculate the weekday name (Sunday=0, Monday=1, Tuesday=2, ...):
var day;
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
  default:
    day = "Unknown Day";
} 
console.log(day);
//: Thursday

// Example 3 ==========================================================
// If today is neither Saturday nor Sunday, write a default message:
text = '';
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);
//: Looking forward to the Weekend

// Example 4 ==========================================================
// Sometimes you will want different cases to use the same code, 
	// or fall-through to a common default.

/* Note: ---------------------------------------------------

	that in this example, 
	the cases share the same code block, 
	and that the default case does not have to be 
	the last case in a switch block (however, 
	if default is NOT the last case in the switch block, 
	remember to end it with a break).

--------------------------------------------------------- */

text = '';
switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  default:
    text = "Looking forward to the Weekend";
    break;
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
}
console.log(text);
//: Soon it is Weekend


// Example 5 ==========================================================
/* 
<!DOCTYPE html>
<html>
<body>

	<button onclick="myFunction()">Try it</button>

	<p id="demo"></p>

	<script>

		function myFunction() {
			var text;
			var favDrink = prompt("What's your favorite cocktail drink?", "Daiquiri");
			switch(favDrink) {
				case "Martini":
					text = "Excellent choice. Martini is good for your soul.";
					break;
				case "Daiquiri":
					text = "Daiquiri is my favorite too!";
					break;
				case "Cosmopolitan":
					text = "Really? Are you sure the Cosmopolitan is your favorite?";
					break;
				default:
					text = "I have never heard of that one..";
			}
			document.getElementById("demo").innerHTML = text;
		}

	</script>

</body>
</html>
*/

// Description:
	// The switch statement executes a block of code depending on different cases.
	// The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. Use switch to select one of many blocks of code to be executed. This is the perfect solution for long, nested if/else statements.
	// The switch statement evaluates an expression. The value of the expression is then compared with the values of each case in the structure. If there is a match, the associated block of code is executed.
	// The switch statement is often used together with a break or a default keyword (or both). These are both optional:
	// The break keyword breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block. If break is omitted, the next code block in the switch statement is executed.
	// The default keyword specifies some code to run if there is no case match. There can only be one default keyword in a switch. Although this is optional, it is recommended that you use it, as it takes care of unexpected cases.

// Syntax:
	/*
		switch(expression) {
			case n:
				code block
				break;
			case n:
				code block
				break;
			default:
				default code block
		}
	*/

// Parameter:
	// expression 	Required. Specifies an expression to be evaluated. The expression is evaluated once. The value of the expression is compared with the values of each case labels in the structure. If there is a match, the associated block of code is executed


// History:
// switch is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
