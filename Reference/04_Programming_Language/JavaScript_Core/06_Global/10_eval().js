// Execute JavaScript code with eval():
let x = 10;
let y = 20;
let text = "x * y";
let result_1 = eval(text);
console.log('result_1', result_1);
//: 200


// Never use eval(). Use code or a function instead:
let a = 10;
let b = 20;
let result_2 = a * b;
console.log('result_2', result_2);
//: 200

// Description:
// The eval() method evaluates or executes an argument.
// If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.


/* Do NOT use eval() ====================================================================================

Executing JavaScript from a string is an BIG security risk.

With eval(), malicious code can run inside your application without permission.

With eval(), third-party code can see the scope of your application, which can lead to possible attacks.

====================================================================================================== */

// Syntax:
// eval(string)

// Parameters:
// string 	A JavaScript expression, variable, statement, or sequence of statements

// History:
// eval() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
