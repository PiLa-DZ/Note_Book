// JavaScript Arithmetic Operators:
// Arithmetic operators are used to perform arithmetic between variables and/or values.
// Given that y = 5, the table below explains the arithmetic operators:

// Oper   Name			  Example		Results
// + 	  Addition 	      x = y + 2 	y=5, x=7 	
// - 	  Subtraction 	  x=y-2			y=5, x=3 	
// * 	  Multiplication  x=y*2			y=5, x=10 	
// ** 	  Exponentiation  ES2016 x=y**2 y=5, x=25 	
// / 	  Division 	      x = y / 2 	y=5, x=2.5 	
// % 	  Remainder 	  x = y % 2 	y=5, x=1 	
// ++ 	  Pre increment   x = ++y		y=6, x=6 	
// ++ 	  Post increment  x = y++		y=6, x=5 	
// -- 	  Pre decrement   x = --y		y=4, x=4 	
// -- 	  Post decrement  x = y--		y=4, x=5 	


let x = 0

// Addition + ====================================
x = 2
console.log(`Addition + ${'-'.repeat(42)}`)
console.log(`x = 2 --> x + 2 = ${x +  2}\n`)
// Addition +			--> x = 2  --> x +  2 = 4

// Subtraction - =================================
x = 2
console.log(`Subtraction - ${'-'.repeat(39)}`)
console.log(`x = 2 --> x - 2 = ${x - 2}\n`)
// Subtraction			--> x = 2  --> x -  2 = 0

// Multiplication * ==============================
x = 4
console.log(`Multiplication * ${'-'.repeat(36)}`)
console.log(`x = 4 --> x * 4 = ${x *  4}\n`)
// Multiplication *		--> x = 4  --> x *  4 = 16

// Exponentiation ** =============================
x = 4
console.log(`Exponentiation ** ${'-'.repeat(35)}`)
console.log(`x = 4 --> x ** 4 = ${x **  4}\n`)
// Exponentiation **	--> x = 4  --> x ** 4 = 256

// Division / ====================================
x = 10
console.log(`Division / ${'-'.repeat(42)}`)
console.log(`x = 10 --> x / 2 = ${x /  2}\n`)
// Division /			--> x = 10 --> x /  2 = 5

// Remainder % ===================================
x = 10
console.log(`Remainder % ${'-'.repeat(41)}`)
console.log(`x = 10 --> x % 3 = ${x %  3}\n`)
// Remainder %			--> x = 10 --> x %  3 = 1

// Pre increment ++x =============================
x = 10
console.log(`Pre increment ++x ${'-'.repeat(35)}`)
console.log(`x = 10 --> ++x = ${++x}\n`)
// Pre increment ++x	--> x = 10 --> ++x    = 11

// Post increment x++ ============================
x = 10; x++
console.log(`Post increment x++ ${'-'.repeat(34)}`)
console.log(`x = 10 --> x++ = ${x}\n`)
// Post increment x++	--> x = 10 --> x++    = 11

// Pre decrement --x =============================
x = 10 
console.log(`Pre decrement --x ${'-'.repeat(35)}`)
console.log(`x = 10 --> --x = ${--x}\n`)
// Pre decrement --x    --> x = 10 --> --x    = 9

// Post decrement x-- ============================
x = 10; x-- 
console.log(`Post decrement x-- ${'-'.repeat(34)}`)
console.log(`x = 10 --> x-- = ${x}\n`)
// Post decrement x--   --> x = 10 --> x--    = 9

// ===============================================
// Addition +			--> x = 2  --> x +  2 = 4
// Subtraction			--> x = 2  --> x -  2 = 0
// Multiplication *		--> x = 4  --> x *  4 = 16
// Exponentiation **	--> x = 4  --> x ** 4 = 256
// Division /			--> x = 10 --> x /  2 = 5
// Remainder %			--> x = 10 --> x %  3 = 1
// Pre increment ++x	--> x = 10 --> ++x    = 11
// Post increment x++	--> x = 10 --> x++    = 11
// Pre decrement --x    --> x = 10 --> --x    = 9
// Post decrement x--   --> x = 10 --> x--    = 9
