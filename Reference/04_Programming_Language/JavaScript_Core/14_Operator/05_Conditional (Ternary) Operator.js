// Conditional (Ternary) Operator
// The conditional operator assigns a value to a variable based on a condition.

// Simple Example =================================================
let a = 1
let b = 2
let result = (a > b) ? a : b
console.log('result', result)
//: 2

// Advanced Examples ==============================================
// x is positive and negative

// Test number is positive or negative or 0
let PN0 = x => x > 0 ? 'Positive' : (x < 0 ? 'Negative' : '0')

console.log('5  is', PN0(5) ) //: 5  is Positive
console.log('-5 is', PN0(-5)) //: -5 is Negative
console.log('0  is', PN0(0) ) //: 0  is 0
