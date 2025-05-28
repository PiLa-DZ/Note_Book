// The Spread (...) Operator:


// Example 1 ==========================================================
// The ... operator expands an iterable into more elements: 
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);
//: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'May' ]

// Example 2 ==========================================================
// The ... operator can be used to expand an iterable into more arguments for function calls:
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);

console.log(maxValue);
//: 87
