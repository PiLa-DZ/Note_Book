# What is Recursion
## When function calls itself
## Example
fun() :
fun()

## We have to stope infinity loop by?
Base Case
- Condition stops recursion
- Example
fun() :
				if Base case occurs :
					return
				fun()

# How to think in Recursion
	Recursion is when function calls itself
	The function used itself to solve the problem
		But on smaller input
	Recursive Solution
	Example -> Factorial
		factorial(n)
			if(n == 1) return 1
			return n*Factorial(n-1)
	Example -> Fibonacci Series
		fib(n)
			if(n == 1 || n == 2) return 1
			return fib(n-1) + fib(n-2)

	Recursion Tree
		Node and Leaves
			
# Recursion vs Iteration
## How iteration works
	- Declare a counter
	- Chage counter value
	// Need one place in memory
## How recursion works
	- function call itself
	// What happens when a function is called?
		- Call Stack
			f1()
			 f2()
			  f3()
	// StackOverflow

## Recursion vs Iteration
	// Iteration is better for computer
	// Recursion may be better for human

