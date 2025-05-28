// Use the prototype property to add a new property to all objects of a given type:
function employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employee.prototype.salary = 2000;

const fred = new employee("Fred Flintstone", "Caveman", 1970); 
console.log('fred', fred);
//: employee { name: 'Fred Flintstone', jobtitle: 'Caveman', born: 1970 }

// Description:
// The prototype is a global property available with all JavaScript objects.
// The prototype property allows you to add new properties and methods to objects.

// Syntax:
// object.prototype.name = value

// History:
// prototype is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
