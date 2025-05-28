// Make a new date method that gives the date object a month-name property called myMonth:
Date.prototype.myMonth = function()
{
if (this.getMonth()==0) {return "January"};
if (this.getMonth()==1) {return "February"};
if (this.getMonth()==2) {return "March"};
if (this.getMonth()==3) {return "April"};
if (this.getMonth()==4) {return "May"};
if (this.getMonth()==5) {return "June"};
if (this.getMonth()==6) {return "July"};
if (this.getMonth()==7) {return "August"};
if (this.getMonth()==8) {return "September"};
if (this.getMonth()==9) {return "October"};
if (this.getMonth()==10) {return "November"};
if (this.getMonth()==11) {return "December"};
}

// Make a Date object, then call the myMonth method:
let d = new Date();
let month = d.myMonth();
console.log('month', month);
//: October

// Description:
// prototype allows you to add new properties and methods to dates.
// prototype is a property available with all JavaScript objects.

// Syntax:
// Date.prototype.name = value

/* Warning ======================================================================

You are not advised to change the prototype of an object that you do not control.

You should not change the prototype of built in JavaScript datatypes like:

    Numbers
    Strings
    Arrays
    Dates
    Booleans
    Function
    Objects

Only change the prototype of your own objects.

============================================================================== */

// History:
// prototype is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
